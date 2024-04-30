const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
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

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    opacity = 0;
  });
};

export default modal;
