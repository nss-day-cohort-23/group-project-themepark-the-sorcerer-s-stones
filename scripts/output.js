"use strict";
let $ = require("jquery");
let areaAtttrTemplate = require("../templates/areaAttr.hbs");
let openAttrTemplate = require("../templates/openAttr.hbs");
let areaTemplate = require("../templates/areas.hbs");


module.exports.printToDom = (parkAreas) => {
    console.log('CHeck Area Data', parkAreas);
    for (let i = 0; i < parkAreas.length; i++ ) {
    $(`.area${i}`).append(areaTemplate(parkAreas[i]));
    }
};