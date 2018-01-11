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