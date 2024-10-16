/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1F2937', // Màu nền tối
        'dark-text': '#F9FAFB', // Màu chữ sáng
        'accent-blue': '#3B82F6', // Màu xanh dương
        'accent-green': '#22C55E', // Màu xanh lá
      },
    },
  },
  plugins: [],
}
