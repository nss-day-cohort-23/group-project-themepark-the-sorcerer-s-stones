"use strict";
let $ = require("jquery");
let controller = require("./controller");
let factory = require("./factory");


$(window).ready(() => {
    controller.startAreas();
    let time = factory.timeNow();
    controller.displayTimeAttr(time);
});

$('.area').on("click", function() {
    let divId = this.id;
    controller.startAreaClick(divId);
});




$('.search').on("keypress",function () {
    
    
    if(event.keyCode === 13){
    let input = $('.search').val();
    controller.searchAttrByName(input); 
    }
});



$(document).on('click', '.attraction-click', function() {
    $(this).children().show();
    $(this).siblings().children('.hidden').hide();
});

$('#time-selector').on('change', function() {
    let time = $('#time-selector').val();
    controller.displayTimeAttr(time.replace(':', ''));

});


