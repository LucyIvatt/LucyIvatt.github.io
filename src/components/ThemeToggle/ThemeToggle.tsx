import { Theme } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(Theme.Dark);
  const toggleTheme = () =>
    setTheme(theme == Theme.Dark ? Theme.Light : Theme.Dark);

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
      {theme == Theme.Dark && <BsFillMoonStarsFill data-testid="moon-icon" />}
      {theme == Theme.Light && <BsFillSunFill data-testid="sun-icon" />}
    </button>
  );
};
