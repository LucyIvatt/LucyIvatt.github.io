"use client";

import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const links: [string, string][] = [
  ["About", "#placeholder"],
  ["Education", "#placeholder"],
  ["Experience", "#placeholder"],
  ["Projects", "#placeholder"],
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between py-4 px-6 items-center text-white bg-background">
      <h1 className="pr-6">
        <span className="bg-gradient-to-b from-foreground to-purple-300 bg-clip-text text-transparent">
          Lucy
        </span>
        Ivatt
      </h1>
      <div className="flex items-center gap-6">
        <ul className="hidden gap-6 items-center md:flex">
          {links.map(([text, link]) => (
            <li
              key={text}
              className="hover:bg-gradient-to-b hover:from-foreground hover:to-purple-300 hover:bg-clip-text hover:text-transparent"
            >
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <BsFillMoonStarsFill className="hover:text-foreground" />
        <GiHamburgerMenu
          className="hover:text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </nav>
  );
};
