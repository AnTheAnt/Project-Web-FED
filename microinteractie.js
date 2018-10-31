/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var vliegen = document.querySelectorAll('.vliegen');

for (var i = 0; i < vliegen.length; i++) {
    vliegen[i].addEventListener('click', opslaan);
}

var downloadKnoppen = document.querySelectorAll(".download");

for (var i = 0; i < downloadKnoppen.length; i++) {
    downloadKnoppen[i].addEventListener('click', downloadPress);
}

function downloadPress(event) {
    loader = document.querySelector(".loadingProgressG");
    loader.classList.add('active')
}

function opslaan(event) {
    var icon = document.querySelector(".icoon");
    icon.classList.add('active')
    bookMark(event)
}

function bookMark(element) {

    console.log(element.path[0])

    element.path[0].classList.add('active')
}
