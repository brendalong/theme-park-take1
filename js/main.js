"use strict";

let db = require('./db-calls.js');

db.fetchParkInfo()
   .then((result) => {
    result.forEach((item, index) =>{
        // console.log(index, item.description);
    });
});


db.fetchAttractions()
    .then((result) => {
    result.forEach((item, index) =>{
        // console.log(index, item.description);
    });
});

db.fetchTypes()
    .then((result) => {
    result.forEach((item, index) =>{
        console.log(index, item);
    });
});