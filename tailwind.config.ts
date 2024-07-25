import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        textprimary: "#141B52",
        textsecondary: "#FF0000",
        redPrimary: "#FF0000",
      },
      screens: {
        small: "420px",
        desktopRare: "1400px",

        desktop: "2000px",
      },
    },
  },
  plugins: [],
};
export default config;
