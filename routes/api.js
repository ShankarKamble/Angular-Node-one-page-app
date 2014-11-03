'use strict';
var  http = require('http'),
     https = require('https'),
      fs = require('fs');


//Post the Json Data
exports.getStaticJsonData = function (req, res) {
    //Contains the location of the file
    var fileLocation = __dirname + '/../public/js/article-data.json';
    //Read the file asynchronously
    fs.readFile(fileLocation,'utf8', function (err, data) {
        if (err) {
            throw err;
        } else {
            res.json({
               data: JSON.parse(data)
            });
        }
    });
};