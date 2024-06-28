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
        'img-1': "url('/assets/images/shoe4.jpg')",
        'img-2': "url('/assets/images/shoe5.jpg')",
        'img-3': "url('/assets/images/shoe6.jpg')"
      },
    },
  },
  plugins: [],
};
export default config;
