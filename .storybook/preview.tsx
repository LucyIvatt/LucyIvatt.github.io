import type { Preview } from "@storybook/react";
import localFont from "next/font/local";

import React from "react";
import "../src/app/globals.css";

const GeistSans = localFont({
  src: "../src/app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

console.log("GeistSans.variable", GeistSans.variable);

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${`font-sans ${GeistSans.variable}`}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
