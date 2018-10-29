/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var vliegen = document.querySelectorAll('.vliegen');

for (var i = 0; i < vliegen.length; i++) {
    vliegen[i].addEventListener('click', test);
}

var downloadKnoppen = document.querySelectorAll(".download");

for (var i = 0; i < downloadKnoppen.length; i++) {
    downloadKnoppen[i].addEventListener('click', downloadPress);
}

function downloadPress(event) {
    loader = document.querySelectorAll('.loadingProgressG')
    loader.classList.add('active')
}

function test(event) {
    var icon = document.querySelector(".icoon");
    icon.classList.add('active')
    bookMark(event)
}

function bookMark(element) {

    console.log(element.path[0])

    element.path[0].classList.add('active')
}



//var vliegen2 = document.querySelectorAll(".vliegen2");
//
//for (var i = 0; i < vliegen2.length; i++) {
//    vliegen2[i].addEventListener('click', test);
//}
//
//
//function uitklap(event) {
//    var icon2 = document.querySelector("#loadingProgresG");
//
//    icon2.classList.add('active')
//
//    uitklap(event)
//}
//
//function uitklap(element) {
//
//    console.log(element.path[0])
//
//    element.path[0].classList.add('active')
//}









//var download = document.getElementById("download");

//.addEventListener("click", function () {
//
//    console.log("ok");
//});

//
//function progress() {
//    var el = document.getElementById("progress");
//    var width = 1;
//    var id = setInterval(frame, 100);
//    //will call frame function every 60 ms interval//
//    function frame() {
//        if (width >= 0) {
//            clearInterval(id);
//            // if progress width is equel to 100 we will clear timer set by  Interval function//
//            // clear interval function takes id created by setInterval//
//
//        } else {
//            width++; //increase width of pregressbar//
//            el.style.width = width + "%"; //increase progress withd
//        }
//    }
//
//}
//
//download.addEventListener('click', progress);
//
//console.log(download);
