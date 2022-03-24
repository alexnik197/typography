let ButtonOne = $(".catalog__button--1");
let ButtonTwo = $(".catalog__button--2");
ButtonOne.on("click", showSplideOne);
ButtonTwo.on("click", showSplideTwo);

function showSplideOne () {
    let LinkFirst = $(".splide__list--1");
    let LinkSecond = $(".splide__list--2");
    LinkFirst.removeClass("splide__list--hide");
    LinkSecond.addClass("splide__list--hide");
}

function showSplideTwo () {
    let LinkSecond = $(".splide__list--2");
    let LinkFirst = $(".splide__list--1");
    LinkFirst.addClass("splide__list--hide");
    LinkSecond.removeClass("splide__list--hide");
}