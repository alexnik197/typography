// Set variables
const btnName = '#btn';
const splideName = '#splide';
const btnTotal = 9;


// Declarate functions
function addClsBtn (btnMain, num) {
    document.querySelector(btnMain + num).addEventListener('click', function(){
        document.querySelector(btnMain + num).classList.add('button-active');
        function delClsBtn () {
            for (let i = 1; i <= btnTotal; i++) {
                if (i != num)
                document.querySelector(btnMain + i).classList.remove('button-active');
            }
        }
        delClsBtn();
    });
}

function addClsSlide (button, slide, num) {
    document.querySelector(button + num).addEventListener('click', function() {
        document.querySelector(slide + num).classList.remove('splide__list--hide');
        function addClsSlide () {
            for (let i = 1; i <= btnTotal; i++) {
                if (i != num)
                document.querySelector(slide + i).classList.add('splide__list--hide');
            }
        }
        addClsSlide();
    });
}


// Calling functions
for (let btnNum = 1; btnNum <= btnTotal; btnNum++)  {
    addClsBtn(btnName, btnNum);
    addClsBtn(btnName, btnNum);
    addClsBtn(btnName, btnNum);
    addClsBtn(btnName, btnNum);
    addClsBtn(btnName, btnNum);
    addClsBtn(btnName, btnNum);
    addClsBtn(btnName, btnNum);
    addClsBtn(btnName, btnNum);
    addClsBtn(btnName, btnNum);
    addClsSlide (btnName, splideName, btnNum);
    addClsSlide (btnName, splideName, btnNum);
    addClsSlide (btnName, splideName, btnNum);
    addClsSlide (btnName, splideName, btnNum);
    addClsSlide (btnName, splideName, btnNum);
    addClsSlide (btnName, splideName, btnNum);
    addClsSlide (btnName, splideName, btnNum);
    addClsSlide (btnName, splideName, btnNum);
    addClsSlide (btnName, splideName, btnNum);

}