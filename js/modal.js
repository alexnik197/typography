const openModal = document.querySelectorAll(".modal-call");
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", function () {
    document.querySelector(".modal").classList.add("modal-open");
  });
}

document.querySelector("#modal-close").addEventListener("click", function () {
  document.querySelector(".modal").classList.remove("modal-open");
});
