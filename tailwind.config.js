/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "m-explore": "url('/public/bg-explore.png')",
        "d-explore": "url('/public/bg-section-purple.png')",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite", // 添加自定义旋转动画
      },
    },
  },
  plugins: [],
};
