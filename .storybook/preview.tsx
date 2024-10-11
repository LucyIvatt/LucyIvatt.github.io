import type { Preview } from "@storybook/react";
import { GeistSans } from "../src/lib/fonts";
import React from "react";
import "../src/app/globals.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${GeistSans.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
