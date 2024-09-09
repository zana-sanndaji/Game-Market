/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily : {
        "Dana" : "Dana",
        "DanaMedium" : "Dana Medium",
        "DanaDemiBold" : "Dana DemiBold",
        "MorabbaBold" : "Morabba Bold",
        "MorabbaLight" : "Morabba Light",
        "MorabbaMedium" : "Morabba Medium",
      },
      colors : {
        "mainbg" : "#1F2128",
        "text-color" : "#C6C6C6",
        "text-input" : "#808191",
        "input-bg" : "#E4E4E4",
        "card-bg" : "#242731",
        "card-price" : "#FF754C",
        "gard1" : "#F0F3F6",
        "gard2" : "#FF754C",
        "gard3" : "#FF754C",
        "article-bg" : "#242731",
        "bg-tag" : "#6C5DD3",
        "tag-hover" : "#D2CBFF",
        "input-email" : "#1F212869"
      },
      maxWidth : {
        "maxw" : "14.5rem"
      },
      backgroundImage : {
        'neihbor' : "url('./public/images/neihbor.jpg')"
      },
      backdropBlur: {
        xs: '2px',
      },
      width: {
        "128" : "64rem",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
