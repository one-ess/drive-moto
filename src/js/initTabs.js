export const tabsContainers = document.querySelectorAll(".tabs-container");

export const initTabs = () => {
  tabsContainers.forEach((tabsContainer) => {
    tabsContainer.addEventListener("click", (e) => {
      const tabs = tabsContainer.querySelectorAll(".tab");
      const tabsContent = tabsContainer.querySelectorAll(".tab-content");
      if (e.target.classList.contains("tab")) {
        tabs.forEach((tab) => {
          if (e.target !== tab) {
            tab.classList.remove("tab_active");
          } else {
            tab.classList.add("tab_active");
          }
        });
        tabsContent.forEach((tabContent) => {
          if (tabContent.dataset.tab === e.target.dataset.tab) {
            tabContent.classList.add("tab-content_active");
          } else {
            tabContent.classList.remove("tab-content_active");
          }
        });
      }
    });
  });
};
