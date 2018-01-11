"use strict";
let $ = require("jquery");
let controller = require("./controller");


$(window).ready(() => {
    controller.startAreas();
});

$('.area').on("click", function() {
    console.log('CLICK AREA', this);
    controller.startAreaClick();
});


const searchAttrByName = (input) => {
    if (input.keyCode === 13) {
        factory.getAttrTypes
            .then(attractions => {
                console.log('att', attractions);


            });
    }
};