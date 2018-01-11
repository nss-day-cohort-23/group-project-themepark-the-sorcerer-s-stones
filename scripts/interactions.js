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



const timeNow = () => {
    let currentTime = new Date(Date.now()),
    currentHours = currentTime.getHours(),
    currentMinutes = currentTime.getMinutes();
    currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;

    $("#time-selector").val(`${currentHours}:${currentMinutes}`);
};

// $('#time').bootstrapMaterialDatePicker({ date: false });  This isn't working!!! 

// $('time-selector').change(searchAttractionsByHour);
