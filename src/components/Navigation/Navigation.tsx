import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const links: [string, string][] = [
  ["About Me", "#test"],
  ["Education", "#test"],
  ["Experience", "#test"],
  ["Projects", "#test"],
];

export const Navigation = () => {
  return (
    <nav className="flex justify-between py-4 px-6 items-center text-white bg-background">
      <h1>
        <span className="text-foreground">Lucy</span> Ivatt
      </h1>
      <ul className="flex gap-6 items-center ">
        {links.map(([text, link], index) => (
          <li key={index} className="hover:text-foreground">
            <a href={link}>{text}</a>
          </li>
        ))}
        <BsFillMoonStarsFill className="hover:text-foreground" />
      </ul>
    </nav>
  );
};
