import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { 
        background: '#1C1B23',
        foreground: '#b07ff0',
        example: '#2c2a40'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
    }
  },
  plugins: [],
};
export default config;
