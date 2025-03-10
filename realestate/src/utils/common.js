export const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
    return {}; // Added return for larger screens
};

export const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 20, // Adjusted space between slides for better responsiveness
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2
      },
      750: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 4,
      },
    },
};
