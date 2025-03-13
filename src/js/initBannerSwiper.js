import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const bannerContainer = document.querySelector(".banners__swiper-container");

export const initBannerSwiper = () => {
  const bannerBtnPrev = bannerContainer.querySelector(".banners__nav-button_prev");
  const bannerBtnNext = bannerContainer.querySelector(".banners__nav-button_next");

  new Swiper(bannerContainer, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    speed: 600,
    navigation: {
      prevEl: bannerBtnPrev,
      nextEl: bannerBtnNext,
    },
    pagination: {
      el: ".banners__dots",
      clickable: true,
      bulletClass: "banners__dot",
      renderBullet: function (_, className) {
        return `<li class="${className}"></li>`;
      },
    },
  });
};
