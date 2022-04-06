let modalWindow = $(".modal")
let buttonModal = $(".button-modal");
let buttonModalClose = $(".modal-form__data-close")
buttonModal.on("click", showModal);
buttonModalClose.on("click", hideModal);

function showModal () {
    modalWindow.addClass("modal--active");
}

function hideModal () {
    modalWindow.removeClass("modal--active");
}
