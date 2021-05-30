module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Primary
        cyan: 'hsl(180, 66%, 49%)',
        cyanbar: '#2bd1cf',
        cyanlight: '#9be3e2',
        darkviolet: 'hsl(257, 27%, 26%)',
        clrlogin: '#3f3d55',

        // Secondary
        red: 'hsl(0, 87%, 67%)',

        // Neutral
        graylight: 'hsl(0, 0%, 75%)',
        grayviolet: 'hsl(257, 7%, 63%)',
        verydarkblue: 'hsl(255, 11%, 22%)',
        verydarkviolet: 'hsl(260, 8%, 14%)',

        //background color second section
        bgray: '#f0f1f6'
      },

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },

      screens: {
        'mobile': { 'max': '375px'},
        'minmobile' : {'min' : '376px'}, 
        'margin' : { 'min' : '376px', 'max': '641px' },
        'mdmax': { 'max': '768px'},
        'lgmax': { 'max' : '1024px'},
        '1303px': {'max' : '1303px', 'min': '376px' }
      },

      lineHeight: {
        '1.1': '1.1'
      },

      backgroundImage: {
        'boost-desktop': 'url(/images/bg-boost-desktop.svg)',
        'boost-mobile' : 'url(/images/bg-boost-mobile.svg)',
        'shorten-desktop': 'url(/images/bg-shorten-desktop.svg)',
        'shorten-mobile': 'url(/images/bg-shorten-mobile.svg)'
      },

      spacing: {
        '0.60rem': '0.60rem',
        '0.8rem': '0.8rem',
        '5.25rem': '5.25rem',
        '4.3rem': '4.3rem',
        '4.7rem': '4.7rem',
        '5.5rem': '5.5rem',
        '5.7rem': '5.7rem',
        '8.35rem': '8.35rem',
        '8.8rem': '8.8rem',
        '15.1rem': '15.1rem',
        '17rem': '17rem',
        '20rem': '20rem',
        '22rem': '22rem',
        '28rem': '28rem',
        '37rem': '37rem',
        '40rem': '40rem',
        '55rem': '55rem',
        '50rem': '50rem',
        '60rem': '60rem',
        '80rem': '80rem',
        '85rem': '85rem',
        '87%': '87%'
      },

      fontSize: {
        '0.95': '.95rem',
        '0.8rem': '.8rem',
        '2.75': '2.75rem'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
