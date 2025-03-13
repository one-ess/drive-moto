import noUiSlider from "nouislider";

export const sortButtons = document.querySelectorAll(".sort__button");
export const paginationContainer = document.querySelector(".catalog__pagination");
export const rangeSlider = document.querySelector(".filter__range");
export const asideForm = document.querySelector(".aside__form");

export const sortProducts = () => {
  const products = document.querySelector(".catalog__cards");
  sortButtons.forEach((sortButton, index) => {
    sortButton.addEventListener("click", () => {
      if (!sortButton.classList.contains("sort__button_active")) {
        sortButton.classList.add("sort__button_active");
      }
      index === 0 ? sortButtons[index + 1].classList.remove("sort__button_active") : sortButtons[index - 1].classList.remove("sort__button_active");
      if (sortButton.classList.contains("sort__button_grid")) {
        products.classList.remove("catalog__cards_list");
      } else {
        products.classList.add("catalog__cards_list");
      }
    });
  });
};

export const togglePagination = () => {
  const paginationLinks = document.querySelectorAll(".pagination__link");
  paginationContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("pagination__link") && !e.target.classList.contains("pagination__link_active")) {
      paginationLinks.forEach((paginationLink) => {
        paginationLink.classList.remove("pagination__link_active");
      });
      e.target.classList.add("pagination__link_active");
    }
  });
};

export const initRangeSlider = () => {
  const from = document.querySelector(".filter__range-from"); //текстовое содержимое цены от
  const inputFrom = document.querySelector(".filter__range-input_from"); //скрытый инпут, value которого будет получено от слайдера и передано в объект формы

  const to = document.querySelector(".filter__range-to"); //текстовое содержимое цены до
  const inputTo = document.querySelector(".filter__range-input_to"); //скрытый инпут, value которого будет получено от слайдера и передано в объект формы

  noUiSlider.create(rangeSlider, {
    connect: true,
    behaviour: "tap",
    start: [100000, 700000],
    range: {
      min: [0],
      max: [2000000],
    },
  });

  rangeSlider.noUiSlider.on("update", (values) => {
    from.textContent = values[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ").slice(0, -3);
    to.textContent = values[1].replace(/\B(?=(\d{3})+(?!\d))/g, " ").slice(0, -3);
    inputFrom.value = values[0];
    inputTo.value = values[1];
  });
};

export const submitFilterForm = () => {
  asideForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(asideForm);
    const groupedData = {
      inStock: data.get("inStock"),
      arrivals: data.getAll("arrivals"),
      priceFrom: data.get("priceFrom"),
      priceTo: data.get("priceTo"),
      power: data.get("power"),
      enginePower: data.get("enginePower"),
      maxSpeed: data.get("maxSpeed"),
      brand: data.getAll("brand"),
      model: data.getAll("model"),
      promotion: data.getAll("promotion"),
      countries: data.getAll("countries"),
    };
    alert("Объект формы получен в консоль");
    console.log(groupedData);
  });
};

export const resetRangeSlider = () => {
  const formResetBtn = asideForm.querySelector(".form__reset");
  formResetBtn.addEventListener("click", () => rangeSlider.noUiSlider.reset());
};
