
"use strict";
let $ = require("jquery");
let areaAttrTemplate = require("../templates/areaAttr.hbs");
let openAttrTemplate = require("../templates/openAttr.hbs");
let areaTemplate = require("../templates/areas.hbs");
let openNowTemplate = require("../templates/openNowAttr.hbs");
let searchAttrByName = require("../templates/searchAttr.hbs");


module.exports.printToDom = (parkAreas) => {
    console.log('CHeck Area Data', parkAreas);
    for (let i = 0; i < parkAreas.length; i++ ) {
        $(`.area${i}`).append(areaTemplate(parkAreas[i]));
    }
};

module.exports.printClickArea = (attr, divId) => {
    $('.attr-display').html("");
    attr.forEach((obj) => {
        if (obj.area_id === +divId) {
            $('.attr-display').append(areaAttrTemplate(obj));
        }
    });
};

module.exports.printOpenRides = (openRides) => {
    $('.attr-display').html("");
    openRides.forEach((obj) => {
        $('.attr-display').append(openNowTemplate(obj));
    });
};

module.exports.printSearchArea = (searchAttr) =>{
    $('.area').css('border', '2px solid');
    $('.attr-display').html("");
    console.log('is this working', searchAttr );
  searchAttr.forEach((obj) => {
      $('.attr-display').append(searchAttrByName(obj));
        });
        searchAttr.forEach( (areas) => {
        let highlight = $(`.area${areas.area_id}`);
        highlight.css('border', '8px solid');
        });
    };
