/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#FFF",
        "text-brand-primary": "#FFF",
        "text-brand-secondary": "#F4EBFF",
        "text-brand-tertiary-alt": "#CC3A02",
        "utility-brand-500-alt": "#EE4A03",
        "utility-brand-300-alt": "#FF9E6B",
        "utility-brand-200-alt": "#FFC2A3",
        "text-primary": "#181D27",
        "text-tertiary": "#535862",
        "bg-brand-solid": "#CC3A02",
        "utility-brand-100-alt": "#F4EBFF",
        "button-primary-fg": "#FFF",
        "fg-brand-primary": "#CC3A02",
        "fg-secondary": "#414651",
        "featured-icon-modern-border": "#E9EAEB",
        "border-tertiary": "#F5F5F5",
        "border-brand": "#EE4A03",
        "border-secondary": "#E9EAEB",
        "utility-brand-700": "#A6D202",
        "utility-brand-200": "#FFC2A3",
        "utility-brand-50": "#FFF0E8",
        "bg-tertiary": "#F5F5F5",
        "bg-quaternary": "#E9EAEB", // Fixed spelling
        "fg-quinary": "#A4A7AE",
        "text-brand-secondary-alt": "#A62D02", // Renamed duplicate
        "text-color":"#0000"
      },
    },
  },
  plugins: [],
};
