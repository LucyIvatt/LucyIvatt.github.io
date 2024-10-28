import { Theme } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") ?? Theme.Dark;
  });

  const toggleTheme = () => {
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === Theme.Dark)
      document.querySelector("html")?.classList.add("dark");
    else document.querySelector("html")?.classList.remove("dark");
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="hover:text-foreground focus:border-foreground"
    >
      <BsFillMoonStarsFill />
    </button>
  );
};
