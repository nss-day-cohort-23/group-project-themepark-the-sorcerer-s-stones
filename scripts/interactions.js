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




$('.search').on("keypress",function () {
    
    
    if(event.keyCode === 13){
    let input = $('.search').val();
    controller.searchAttrByName(input); 
    }
});

const timeNow = () => {
    let currentTime = new Date(Date.now()),
    currentHours = currentTime.getHours(),
    currentMinutes = currentTime.getMinutes();
    currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;

    $("#time-selector").val(`${currentHours}:${currentMinutes}`);
};

$(document).on('click', '.attraction-click', function() {
    $(this).children().show();
    $(this).siblings().children('.hidden').hide();
});

// $('#time').bootstrapMaterialDatePicker({ date: false });  This isn't working!!! 

// $('time-selector').change(searchAttractionsByHour);
