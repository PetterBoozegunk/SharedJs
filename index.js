/*jslint node: true, stupid: true */

var concatFiles = require("concat-files"),

    sharedJs = {
        concat: function (srcArray, dest) {

            console.log("concatFiles: ", arguments);

            concatFiles(srcArray, dest, function () {
                console.log("concatFiles: done");
            });
        }
    };

module.exports = sharedJs;