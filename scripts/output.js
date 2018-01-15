
"use strict";
let $ = require("jquery");
let areaAttrTemplate = require("../templates/areaAttr.hbs");
let openAttrTemplate = require("../templates/openAttr.hbs");
let areaTemplate = require("../templates/areas.hbs");
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

module.exports.printSearchArea = (searchAttr) =>{
    console.log('is this working', searchAttr );
  
    
    $('.attr-display').append(searchAttrByName(searchAttrByName));
};