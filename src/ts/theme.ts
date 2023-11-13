import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Theme = "dark" | "light" | null;

const DARK_THEME_VAR:Record<string, string> = {
    '--main-background-color':'#1C1C1C',
    '--menu-background-color':'#181818',
    '--black': '#d9d9d9',
    '--black-weak': '#c7c7c7',
    '--gray': '#909090',
    '--gray-weak':'#7c7c7c',
    '--whitegray':'#5A5A5A',
    '--whitegray-weak':'rgb(71, 71, 71)',
    '--navbar-background-color':'#161616',
    '--code-background':'#2b2b2b',
};

const LIGHT_THEME_VAR:Record<string, string> = {
  '--main-background-color':'#f0f0f0',
  '--menu-background-color':'#ebebeb',
  '--black': '#1d1d1d',
  '--black-weak': '#2b2b2b',
  '--gray': '#737373',
  '--gray-weak':'#919191',
  '--whitegray':'#a5a5a5',
  '--whitegray-weak':'rgb(209, 209, 209)',
  '--navbar-background-color':'#fafafa',
  '--code-background':'#e3eaf2',
};

export function useTheme():[Theme, Dispatch<SetStateAction<Theme>>] {
  // 테마 커스텀 훅, setTheme 에 "dark" 또는 "light" 설정 시 알아서 적용.
  const [theme, setTheme] = useState<Theme>(null);

  // client 코드를 hydration으로부터 분리를 했는데, 이 코드에는 리렌더링이 작용중인 dispatch가 있으므로,
  // use effect로 감쌌다.
  useEffect(() => {
    const localTheme:Theme = localStorage.getItem("theme") as Theme;
  
    if(localTheme == "dark" || (!localTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, []);
  
  useEffect(() => {
    if(theme == "dark") setVariables(theme, DARK_THEME_VAR);
    else setVariables(theme, LIGHT_THEME_VAR);

    if(theme) localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

function setVariables(theme:Theme, themeItem:Record<string, string>) {
  const root:HTMLElement | null = document.querySelector(":root");
  const body:HTMLElement | null = document.querySelector("body");
  if(!root || !body || !theme) return;
  body.dataset.lightMode = theme;
  for(let key in themeItem) {
    root.style.setProperty(key, themeItem[key]);
  }
}