"use strict";

const $ = require('jquery');

module.exports.formatAttr = (areas, attr, attrTypes) => {
    let updateAttr = [];
    attr.forEach((obj) => {
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