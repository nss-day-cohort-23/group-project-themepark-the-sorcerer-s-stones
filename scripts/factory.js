"use strict";
const $ = require('jquery');

module.exports.timeNow = () => {
    let currentTime = new Date(Date.now()),
    currentHours = currentTime.getHours(),
    currentMinutes = currentTime.getMinutes();
    currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
    let time = `${currentHours}${currentMinutes}`;
    return time;
    // $("#time-selector").val(`${currentHours}:${currentMinutes}`);
};

module.exports.getTime = () => {
    let date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}`;
    let newTime = time.replace(":", "");
    return time;
    
};

module.exports.getAreas = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://the-sorc.firebaseio.com/areas.json'
        }).done( (data) => {
            resolve(data);
    
        }).fail((error) => {
            reject(error);
        });
    });
};

module.exports.getAttr = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://the-sorc.firebaseio.com/attractions.json'
        }).done( (data) => {
            resolve(data);
    
        }).fail((error) => {
            reject(error);
        });
    });
};

module.exports.getAttrTypes = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://the-sorc.firebaseio.com/attraction_types.json'
        }).done( (data) => {
            resolve(data);
            
            
        }).fail((error) => {
            reject(error);
        });
    });
};

// FOOTER DATE FUNCTION
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

if(dd < 10) {
    dd = '0'+dd;
}

if (mm < 10) {
    mm = '0'+mm;
}

today = `${mm}/${dd}/${yyyy}`;
console.log("today's date: ", today);

document.getElementById("footer-date").innerHTML = today;
// END OF FOOTER DATE

