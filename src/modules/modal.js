const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const width = document.documentElement.clientWidth;
  let opacity = 0;

  const animateModal = () => {
    if (opacity < 1) {
      opacity += 0.1;
      modal.style.opacity = opacity;
      setTimeout(animateModal, 30);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (width >= 768) {
        animateModal();
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};

export default modal;
