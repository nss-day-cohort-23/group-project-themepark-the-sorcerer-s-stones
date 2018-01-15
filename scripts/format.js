"use strict";

const $ = require('jquery');

module.exports.formatAttr = (areas, attr, attrTypes) => {
    let updateAttr = [];
    attr.forEach((obj) => {
        if ( obj.hasOwnProperty("times") ) {
            obj.time_format = [];
            for(let i = 0; i < obj.times.length; i++) {
                if (obj.times[i].slice(-2) === "AM") {
                    obj.time_format.push(+(obj.times[i].replace(':', '').slice(0, -2)));
                } else if (obj.times[i].slice(-2) === "PM" && obj.times[i].slice(0, 2) === "12") {
                obj.time_format.push(+(obj.times[i].replace(':', '').slice(0, -2 )));                    
              } else if (obj.times[i].slice(-2) === "PM" && obj.times[i].slice(0, 2) !== "12") {
                  obj.time_format.push(+(obj.times[i].replace(':', '').slice(0, -2 )) + 1200);
              }
            }
        }
        for ( let i = 0; i < attrTypes.length; i++ ) {
            if(obj.type_id === attrTypes[i].id) {
                obj.type_name = attrTypes[i].name;
                updateAttr.push(obj);
            }
        }
        for(let i = 0; i < areas.length; i++) {
            if (obj.area_id === areas[i].id) {
                obj.area_name = areas[i].name;                
            }
        }
    });
    return updateAttr;
};

module.exports.findSearchData = (attractions, input) => {
    let attractionsListArray = [];
    for (let i = 0; i < attractions.length; i++) {
    
        
        if (attractions[i].name.toLowerCase().includes(input.toLowerCase())) {
            attractionsListArray.push(attractions[i]);
        }
        
    }
    return attractionsListArray;
    
};

module.exports.findOpenRides = (attr, time) => {
    let openRides = [];
    attr.forEach((obj) => {
        if (obj.hasOwnProperty('times')) {
            for (let i = 0; i < obj.time_format.length; i++) {
                let timeString = (obj.time_format[i].toString());
                if ( timeString.slice(0, -2) === time.slice(0, -2) ) {
                    openRides.push(obj);
                }
            }
        } else if (obj.hasOwnProperty('times') === false) {
            openRides.push(obj);
        }
    });
    return openRides;
};