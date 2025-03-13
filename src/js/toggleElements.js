export const toggleMenuBurger = () => {
  const menu = document.querySelector(".header__menu-wrapper");
  const menuBurger = document.querySelector(".menu-burger");
  menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("menu-burger_active");
    menu.classList.toggle("header__menu-wrapper_active");
  });
};

export const cardBtns = document.querySelectorAll(".wishlist-button, .card__cart");
export const toggleCardButtons = () => {
  cardBtns.forEach((cardBtn) => {
    cardBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (cardBtn.classList.contains("wishlist-button")) cardBtn.classList.toggle("wishlist-button_active");
    });
  });
};

export const toggleAsideFilter = () => {
  const aside = document.querySelector(".aside");
  const filterButton = document.querySelector(".catalog__filter-mobile-button");
  const asideClose = aside.querySelector(".aside__close");
  filterButton.addEventListener("click", () => aside.classList.toggle("catalog__aside_active"));
  asideClose.addEventListener("click", () => aside.classList.remove("catalog__aside_active"));
};
