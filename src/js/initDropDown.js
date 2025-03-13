export const dropDowns = document.querySelectorAll(".drop-down, .footer__drop-button");

export const initDropDown = () => {
  dropDowns.forEach((dropDown) => {
    const dropDownContent = dropDown.nextElementSibling;

    if (dropDown.classList.contains("drop-down")) {
      dropDownContent.style.maxHeight = dropDownContent.scrollHeight + "px";
    }

    dropDown.addEventListener("click", (e) => {
      if (dropDownContent.classList.contains("drop-down-content_active")) {
        dropDownContent.style.maxHeight = 0;
        dropDownContent.classList.remove("drop-down-content_active");
      } else {
        dropDownContent.style.maxHeight = dropDownContent.scrollHeight + "px";
        dropDownContent.classList.add("drop-down-content_active");
      }

      if (dropDown.classList.contains("footer__drop-button")) {
        dropDownContent.style = null;
      }

      e.target.classList.toggle("drop-down_active");
    });
  });
};
