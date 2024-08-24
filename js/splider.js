var splide = new Splide('.splide', {
  perPage: 4,
  rewind: true,
  speed: 2000,
  gap: 10,
  
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    320: {
      perPage: 2, // Используйте perPage вместо slidesToShow
    },
    490: {
      perPage: 2, // Используйте perPage вместо slidesToShow
    },
    500: {
      perPage: 3, // Используйте perPage вместо slidesToShow
    },
    1024: {
      perPage: 3, // Используйте perPage вместо slidesToShow
    },
    1280: {
      perPage: 4, // Используйте perPage вместо slidesToShow

    },
  },
  arrows: false,
});

splide.mount();

