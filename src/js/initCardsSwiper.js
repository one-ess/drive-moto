import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const cardsContainers = document.querySelectorAll(".cards__swiper-container");

export const initCardsSwiper = () => {
  cardsContainers.forEach((cardsContainer) => {
    const prevBtn = cardsContainer.querySelector(".cards__nav-button_prev");
    const nextBtn = cardsContainer.querySelector(".cards__nav-button_next");

    new Swiper(cardsContainer, {
      modules: [Navigation, Pagination],
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 600,
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
      pagination: {
        el: ".cards__dots",
        clickable: true,
        bulletClass: "cards__dot",
        renderBullet: function (_, className) {
          return `<li class=${className}></li>`;
        },
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        900: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 2,
        },
        300: {
          slidesPerView: 1,
        },
      },
    });
  });
};
