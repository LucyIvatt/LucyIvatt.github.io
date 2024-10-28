"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

const links: [string, string][] = [
  ["About", "#about"],
  ["Education", "#education"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between py-4 items-center border-b-2 px-4 mx-4 dark:border-example">
      <h1 className="pr-6">
        <span className="bg-gradient-to-b from-foreground to-purple-300 bg-clip-text text-transparent">
          Lucy
        </span>{" "}
        Ivatt
      </h1>
      <div className="flex items-center gap-6">
        <ul className="hidden gap-6 items-center md:flex">
          {links.map(([text, link]) => (
            <li
              key={text}
              className="hover:bg-gradient-to-b hover:from-foreground hover:to-purple-300 hover:bg-clip-text hover:text-transparent focus:border-foreground"
            >
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        <button
          className="hover:text-foreground focus:border-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};
