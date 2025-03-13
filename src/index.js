import { toggleAsideFilter, cardBtns, toggleCardButtons, toggleMenuBurger } from "./js/toggleElements";
import { cardsContainers, initCardsSwiper } from "./js/initCardsSwiper";
import { bannerContainer, initBannerSwiper } from "./js/initBannerSwiper";
import { tabsContainers, initTabs } from "./js/initTabs";
import { dropDowns, initDropDown } from "./js/initDropDown";
import { sortProducts, togglePagination, initRangeSlider, submitFilterForm, sortButtons, paginationContainer, rangeSlider, asideForm, resetRangeSlider } from "./js/catalogController";

import "./js/utils/dynamicAdapt";

const init = () => {
  toggleMenuBurger();
  if (bannerContainer) initBannerSwiper();
  if (tabsContainers.length > 0) initTabs();
  if (dropDowns.length > 0) initDropDown();
  if (cardBtns.length > 0) toggleCardButtons();
  if (cardsContainers.length > 0) initCardsSwiper();
  if (paginationContainer) togglePagination();
  if (rangeSlider) {
    initRangeSlider();
    resetRangeSlider();
  }
  if (sortButtons) sortProducts();
  if (asideForm) {
    toggleAsideFilter();
    submitFilterForm();
  }
};

init();
