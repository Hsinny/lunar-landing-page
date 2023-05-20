/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0083FF',
        'blue100': '#D6F3FF',
        'pink': '#F06A6A',
        'bgcolor': '#FAF7F5',
        'black': '#232323',
        'grey33': '#333333',
        'grey66': '#666666',
        'greyD5': '#D5D5D5',
        'greyF7': '#F7F7F7', 
        'greyE9': '#E9E9E9',
        'grey9F': '#9F9F9F',
        'green': '#2AD11B',
        'yellow': '#FFB800',
      },
      backgroundImage: {
        'banner-img': 'url(/images/img_person_1.png), url(/images/img_person_2.png), url(/images/dot_red.png), url(/images/dot_blue.png), url(/images/img_banner_l.png), url(/images/img_banner_dot.png), url(/images/img_banner_r.png)',
        'advantage-img': 'url(/images/img_advantage_l.png), url(/images/img_advantage_r.png)',
        'card-img': 'url(/images/img_manage_bg.png)',
        'bottom-img': 'url(/images/img_price_l.png), url(/images/img_price_r.png)',
      },
      backgroundPosition: {
        'banner-position': 'top 100px left 10vw, top 180px right 15vw, top 260px left 150px, top 240px right 150px, top left, left 50px bottom -60px, bottom right -157px',
        'advantage-position': 'bottom left, top right',
        'card-position': 'bottom right',
        'bottom-position': 'top 50px left, center right',
      },
      dropShadow: {
        'banner': '0px 4px 24px rgba(0, 0, 0, 0.1)',
      },
      boxShadow: {
        '3xl': '0px 4px 24px rgba(0, 0, 0, 0.1)',
      },
      cursor: {
        'banner': 'url(/images/img_person_3.svg), auto',
      }
    },
  },
  plugins: [],
}
