---
title: "분리 집합 구현 시 주의 점"
date: 2023-10-11
description : "분리집합의 구현에 관해서는 union-find 방식을 사용하여 구현할 수 있는데, 그 중 UNION 하는 과정에서 주의할 필요가 있다."
---
분리집합의 구현에 관해서는 `union-find` 방식을 사용하여 구현할 수 있는데, 그 중 UNION 하는 과정에서 주의할 필요가 있다.

문제를 풀다가 이번에도 같은 방식으로 틀려서 기록하게 되었다.

```cpp
parent[t1] = p2;
```

위와 같이 바꾸게 되면, t1의 부모까지 부모값이 p2로 갱신되지 않고 짤리므로 위와 같이 구현하면 안된다.

따라서 아래와 같이 그냥 부모노드의 부모값을 바꿔주어야한다.

```cpp
int t1 = edges[i - 1].first, t2 = edges[i - 1].second;
int p1 = getParent(t1);
int p2 = getParent(t2);
if (p1 == p2) {
    // if point, memo it and break.
    point = i;
    break;
}
if (p1 < p2) {
    parent[p2] = p1;
}
else {
    parent[p1] = p2;
}
```