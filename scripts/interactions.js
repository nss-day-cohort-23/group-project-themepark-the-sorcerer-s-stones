"use strict";
let $ = require("jquery");
let controller = require("./controller");


$(window).ready(() => {
    controller.startAreas();
    controller.displayTimeAttr();
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

// $('#time').bootstrapMaterialDatePicker({ date: false });  This isn't working!!! 

// $('time-selector').change(searchAttractionsByHour);
