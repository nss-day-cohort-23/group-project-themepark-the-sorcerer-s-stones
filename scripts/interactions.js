"use strict";
let $ = require("jquery");
let controller = require("./controller");

const searchAttrByName = (input) => {
    if (input.keyCode === 13) {
        factory.getAttrTypes
            .then(attractions => {
                console.log('att', attractions);


            });
    }
};

