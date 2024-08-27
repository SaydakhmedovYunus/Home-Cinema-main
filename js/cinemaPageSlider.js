var splide = new Splide( '.splide', {
  perPage:4,
  rewind:true,
  speed:2000,
  gap:25,
  autoplay:{
    delay:4000,
  },
  breakpoints: {
    700:{
      perPage: 2,
      gap:11,
    },
  },
  arrows:false,
  } );
  
  splide.mount();