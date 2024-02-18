/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "01": "#071D55",
          "02": "#3556AB",
          "03": "#0D2972",
        },
        error: "#720D0D",
      },
      boxShadow: {
        btn: "0px 4px 4px 0px #00000040",
        btnInner: "0px 3px 1px 0px #A8B5DE80 inset",
        text: "0px 2px 0px 0px #000000",
        taskCard: "0px 4px 4px 0px #0000001A",
        sidebar: "0px 0px 7px 2px #00000040",
        header: "0px 4px 4px 0px #00000026",
      },
      screens: {
        smallMobile: { max: "320px" },
        // => @media (max-width: 320px) { ... }

        mediumMobile: { max: "375px" },
        // => @media (max-width: 375px) { ... }

        largeMobile: { max: "425px" },
        // => @media (max-width: 425px) { ... }

        tablet: { max: "768px" },
        // => @media (max-width: 768px) { ... }

        tabletAndBelow: { max: "1024px" },
        // => @media (max-width:1024px) { ... }

        laptopAndAbove: { min: "1024px" },
        // => @media (min-width:1024px) { ... }

        largeLaptop: { min: "1440px" },
        // => @media (min-width: 1440px) { ... }

        "4kDesktop": { min: "2560px" },
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
};
