"use strict";

const $ = require('jquery');

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