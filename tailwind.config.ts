import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#fff",
      "primary-foreground": "#DF593E",
      secondary: "#fff",
      "secondary-foreground": "#081F2C",
      link: "#3b82f6",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
