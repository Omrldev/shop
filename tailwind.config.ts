import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/assets/images/bg-custom.svg')",
        'card': "url('/assets/images/miniatura-bg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
