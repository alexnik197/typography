// Code for modal
let modalWindow = $(".modal")
let buttonModal = $(".button-modal");
let buttonModalClose = $(".modal-form__data-close")
buttonModal.on("click", showModal);
buttonModalClose.on("click", hideModal);

function showModal () {
    modalWindow.addClass("modal--active");
    burgerWindow.removeClass("burger--active");
}

function hideModal () {
    modalWindow.removeClass("modal--active");
}



// Code for burger
let buttonBurgerModal = $(".button-burger");
let buttonBurger = $(".menu-button__link");
let burgerWindow = $(".burger")
let buttonBurgerClose = $(".burger-close")
let buttonBurgerList = $(".burger-list__el")
buttonBurgerModal.on("click", showModal);
buttonBurger.on("click", showBurger);
buttonBurgerClose.on("click", hideBurger);
buttonBurgerList.on("click", hideBurger);

function showBurger () {
    burgerWindow.addClass("burger--active");
}

function hideBurger () {
    burgerWindow.removeClass("burger--active");
}
