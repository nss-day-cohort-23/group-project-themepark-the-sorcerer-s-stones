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


$('.search').on("keypress",function () {
    if(event.keyCode === 13){
    let input = $('.search').val();
    controller.searchAttrByName(input); 
    }
});

