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

$(document).on("click", ".attr-info", function() {
    console.log(this.eq('.hidden'));
});