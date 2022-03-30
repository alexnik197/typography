let buttonOne = $(".catalog__button--1");
let buttonTwo = $(".catalog__button--2");
let buttonThree = $(".catalog__button--3");
let buttonFour = $(".catalog__button--4");
let buttonFive = $(".catalog__button--5");
let buttonSix = $(".catalog__button--6");
let buttonSeven = $(".catalog__button--7");
let buttonEight = $(".catalog__button--8");
let buttonNine = $(".catalog__button--9");
let linkOne = $(".splide__list--1");
let linkTwo = $(".splide__list--2");
let linkThree = $(".splide__list--3");
let linkFour = $(".splide__list--4");
let linkFive = $(".splide__list--5");
let linkSix = $(".splide__list--6");
let linkSeven = $(".splide__list--7");
let linkEight = $(".splide__list--8");
let linkNine = $(".splide__list--9");
buttonOne.on("click", showSplideOne);
buttonTwo.on("click", showSplideTwo);
buttonThree.on("click", showSplideThree);
buttonFour.on("click", showSplideFour);
buttonFive.on("click", showSplideFive);
buttonSix.on("click", showSplideSix);
buttonSeven.on("click", showSplideSeven);
buttonEight.on("click", showSplideEight);
buttonNine.on("click", showSplideNine);

function showSplideOne () {
    linkOne.removeClass("splide__list--hide");
    linkTwo.addClass("splide__list--hide");
    linkThree.addClass("splide__list--hide");
    linkFour.addClass("splide__list--hide");
    linkFive.addClass("splide__list--hide");
    linkSix.addClass("splide__list--hide");
    linkSeven.addClass("splide__list--hide");
    linkEight.addClass("splide__list--hide");
    linkNine.addClass("splide__list--hide");
}
function showSplideTwo () {
    linkOne.addClass("splide__list--hide");
    linkTwo.removeClass("splide__list--hide");
    linkThree.addClass("splide__list--hide");
    linkFour.addClass("splide__list--hide");
    linkFive.addClass("splide__list--hide");
    linkSix.addClass("splide__list--hide");
    linkSeven.addClass("splide__list--hide");
    linkEight.addClass("splide__list--hide");
    linkNine.addClass("splide__list--hide");
}
function showSplideThree () {
    linkOne.addClass("splide__list--hide");
    linkTwo.addClass("splide__list--hide");
    linkThree.removeClass("splide__list--hide");
    linkFour.addClass("splide__list--hide");
    linkFive.addClass("splide__list--hide");
    linkSix.addClass("splide__list--hide");
    linkSeven.addClass("splide__list--hide");
    linkEight.addClass("splide__list--hide");
    linkNine.addClass("splide__list--hide");
}
function showSplideFour () {
    linkOne.addClass("splide__list--hide");
    linkTwo.addClass("splide__list--hide");
    linkThree.addClass("splide__list--hide");
    linkFour.removeClass("splide__list--hide");
    linkFive.addClass("splide__list--hide");
    linkSix.addClass("splide__list--hide");
    linkSeven.addClass("splide__list--hide");
    linkEight.addClass("splide__list--hide");
    linkNine.addClass("splide__list--hide");
}
function showSplideFive () {
    linkOne.addClass("splide__list--hide");
    linkTwo.addClass("splide__list--hide");
    linkThree.addClass("splide__list--hide");
    linkFour.addClass("splide__list--hide");
    linkFive.removeClass("splide__list--hide");
    linkSix.addClass("splide__list--hide");
    linkSeven.addClass("splide__list--hide");
    linkEight.addClass("splide__list--hide");
    linkNine.addClass("splide__list--hide");
}
function showSplideSix () {
    linkOne.addClass("splide__list--hide");
    linkTwo.addClass("splide__list--hide");
    linkThree.addClass("splide__list--hide");
    linkFour.addClass("splide__list--hide");
    linkFive.addClass("splide__list--hide");
    linkSix.removeClass("splide__list--hide");
    linkSeven.addClass("splide__list--hide");
    linkEight.addClass("splide__list--hide");
    linkNine.addClass("splide__list--hide");
}
function showSplideSeven () {
    linkOne.addClass("splide__list--hide");
    linkTwo.addClass("splide__list--hide");
    linkThree.addClass("splide__list--hide");
    linkFour.addClass("splide__list--hide");
    linkFive.addClass("splide__list--hide");
    linkSix.addClass("splide__list--hide");
    linkSeven.removeClass("splide__list--hide");
    linkEight.addClass("splide__list--hide");
    linkNine.addClass("splide__list--hide");
}
function showSplideEight () {
    linkOne.addClass("splide__list--hide");
    linkTwo.addClass("splide__list--hide");
    linkThree.addClass("splide__list--hide");
    linkFour.addClass("splide__list--hide");
    linkFive.addClass("splide__list--hide");
    linkSix.addClass("splide__list--hide");
    linkSeven.addClass("splide__list--hide");
    linkEight.removeClass("splide__list--hide");
    linkNine.addClass("splide__list--hide");
}
function showSplideNine () {
    linkOne.addClass("splide__list--hide");
    linkTwo.addClass("splide__list--hide");
    linkThree.addClass("splide__list--hide");
    linkFour.addClass("splide__list--hide");
    linkFive.addClass("splide__list--hide");
    linkSix.addClass("splide__list--hide");
    linkSeven.addClass("splide__list--hide");
    linkEight.addClass("splide__list--hide");
    linkNine.removeClass("splide__list--hide");
}