"use strict";
let $ = require("jquery");
let format = require("./format");
let factory = require("./factory");
let output = require("./output");


module.exports.startAreas = () => {
    factory.getAreas()
    .then((parkAreas) => {
        output.printToDom(parkAreas);
    });
};

        
module.exports.startAreaClick = (divId) => {
    let areas = factory.getAreas();
    let attractions = factory.getAttr();
    let attrTypes = factory.getAttrTypes();
    Promise.all([areas, attractions, attrTypes])
    .then((dataArray) => {
        return format.formatAttr(dataArray[0], dataArray[1], dataArray[2]);        
    })
    .then((updateAttr) => {
        console.log("CHECK TIMES", updateAttr, divId );
        output.printClickArea(updateAttr, divId);
    });
};

module.exports.searchAttrByName = (input) => {
    factory.getAttr()
        .then(attractions => {
          format.findSearchData(attractions, input);                 
            });

        };

module.exports.displayTimeAttr = () => {
    let time = factory.timeNow();
    let areas = factory.getAreas();
    let attractions = factory.getAttr();
    let attrTypes = factory.getAttrTypes();
    Promise.all([areas, attractions, attrTypes])
    .then((dataArray) => {
        return format.formatAttr(dataArray[0], dataArray[1], dataArray[2]);        
    })
    .then((formatAttr) => {
        return format.findOpenRides(formatAttr, time);
    })
    .then((openRides) => {
        output.printOpenRides(openRides);
    });

};