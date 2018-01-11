"use strict";
let $ = require("jquery");
let controller = require("./controller");

$(window).ready(() => {
    controller.startAreas();
});

$('.area').on("click", function() {
    let divId = this.id;
    controller.startAreaClick(divId);
});