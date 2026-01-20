export const openDemoModal = (): void => {
  document.querySelector(".demo-modal-area")?.classList.add("open");
};

export const closeDemoModal = (): void => {
  document.querySelector(".demo-modal-area")?.classList.remove("open");
};
