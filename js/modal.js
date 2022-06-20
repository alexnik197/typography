const modal = document.querySelector(".modal");
const closeModal = function () {
  modal.classList.remove("modal-open");
};

// OPEN MODAL
document.querySelectorAll(".modal-call").forEach(function (el) {
  el.addEventListener("click", function () {
    modal.classList.add("modal-open");
  });
});

// CLOSE MODAL
document.querySelector("#modal-close").addEventListener("click", function () {
  closeModal();
});

document
  .querySelector(".modal-wrapper")
  .addEventListener("click", function (e) {
    if ($(e.target).is(".modal-wrapper")) {
      closeModal();
    }
  });

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    if (modal.classList.contains("modal-open")) {
      closeModal();
    }
  }
});
