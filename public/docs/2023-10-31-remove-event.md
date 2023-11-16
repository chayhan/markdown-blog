---
title: "[ React ] 이벤트 탈착할 때 주의 사항"
date: 2023-10-31
description : "드로우 온 웹 크롬 익스텐션 사이드 프로젝트 중에 생긴 문제입니다."
---

드로우 온 웹 프로젝트를 현재 `vite + react + typescript`로 진행중입니다.

하다가 문제점이 생긴게, 캔버스 토글을 `animation`을 주면서 껐다켰다하는 기능을 만드는 중이넫 여기서 문제가 생기더라고요

`eventlistener` 를 삭제하려면 해당 함수가 무결해야 하고, 함수가 특정 변수에 정의되어 있어 지정할 수 있어야합니다..

그런데, 제가 마우스 이벤트를 사용하던 함수들은 모두 리액트 훅으로 반환되는 `ref` 객체를 사용하고 있었습니다...

이렇게 되면 해당 함수들을 모두 `toggleCanvas` 내에 정의를 해야하는데, 그렇게되면 함수가 너무 길어져서 코드의 가독성이 작살나버리더라고요.

```ts
function toggleCanvas(params:toggleCanvasParams) {
  const {ctx, status} = params;
  const prevX = useRef<number>(0);
  const prevY = useRef<number>(0);

  const contextMenuTimer = useRef<number>(0);
  const pressed = useRef<boolean>(false);

  if (status) {
    ctx.canvas.classList.add("hide-canvas");
    // first click events
    window.addEventListener("mousedown", (e) => {
      if (e.button != 2) return;
      pressed.current = true;
      prevX.current = e.pageX;
      prevY.current = e.pageY;
    });

    // mouse release events
    window.addEventListener("mouseup", (e) => {
      if (e.button != 2) return;
      pressed.current = false;
    });

    // drawing events.
    window.addEventListener("mousemove", (e) => {
      if (!pressed.current) return;
      if (!ctx) return;
      contextMenuTimer.current++;
      doBrush(ctx, prevX, prevY, e);
    });

    // about context menu popup
    window.addEventListener("contextmenu", (e) => {
      if (contextMenuTimer.current >= 10) e.preventDefault();
      contextMenuTimer.current = 0;
    });
  } else {
    ctx.canvas.classList.add("hide-canvas");
    // 여기선 어떻게 해야하지?!
  }
}
```

## 내가 해결한 방법

위와 같은 방법으로 해도 removeEventListener는 동작하지 않습니다.

removeEventListener를 사용하기 위해선 함수가 한번만 정의되어야합니다.

따라서,

1. 중첩함수 (함수가 호출될때마다 정의됨)
2. 익명함수 (함수가 메모리에 매번 새롭게 assign됨)

는 사용할 수 없습니다.

클로저를 이용하여 전역에 접근할 EventContext 클래스를 정의하고, 함수들 또한 전역 스코프에 선언해주어 유일한 객체로 만들어야합니다.

아래는 예시입니다.

```ts
// 이벤트 객체에 클로저로 직접 주입한 객체. 근데 이게 맞는지 모르겠다.
class EventContext {
  static params: toggleCanvasParams;
  static setParam(params:toggleCanvasParams): void {
    EventContext.params = params;
  }
}

function doBrush(params: doBrushParams) { ... }


function handleMouseDown(e: MouseEvent) {
  const {pressed, prevX, prevY} = EventContext.params;
  if (e.button != 2) return;
  pressed.current = true;
  prevX.current = e.pageX;
  prevY.current = e.pageY;
}

function handleMouseUp(e: MouseEvent) {
  const {pressed} = EventContext.params;
  if (e.button != 2) return;
  pressed.current = false;
}

function handleMouseMove(e :MouseEvent) {
  const {pressed, contextMenuTimer, ctx, prevX, prevY} = EventContext.params;
  if (!pressed.current) return;
  contextMenuTimer.current++;
  doBrush({ctx, prevX, prevY, event:e});
}

function handleRightClick(e: MouseEvent) {
  const {contextMenuTimer} = EventContext.params;
  if (contextMenuTimer.current >= 10) e.preventDefault();
  contextMenuTimer.current = 0;
}

export function toggleCanvas(params:toggleCanvasParams) {
  EventContext.setParam(params);
  const {ctx, status} = params;

  if (status) {
    ctx.canvas.classList.remove("hide-canvas");

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("contextmenu", handleRightClick);

  } else {
    ctx.canvas.classList.add("hide-canvas");
    
    window.removeEventListener("mousedown", handleMouseDown);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("contextmenu", handleRightClick);
  }
}
```

여기서 더 나아가서 핸들러들을 EventContext의 메소드로 선언해도 가능한지 한번 연구중에 있습니당

> 보다 자세한 설명이 필요하신가요? `giscus`로 댓글을 남겨주시면 언제든지 토론이 가능합니다!