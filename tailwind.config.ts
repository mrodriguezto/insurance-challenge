import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-background": "var(--dark-background)",
        "dark-foreground": "var(--dark-foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
