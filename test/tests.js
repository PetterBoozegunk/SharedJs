/*jslint node: true, stupid: true */

var expect = require("chai").expect,

    fs = require("fs"),
    sharedJs = require("../index.js");

describe("Concat test", function () {
    it("works", function () {
        sharedJs.concat(["js/concat1.js", "js/concat2.js"], "/testDest");

        var hasCreatedTestDest = false;

        fs.lstat("/testDest", function (err, stats) {
            if (!err && stats.isDirectory()) {
                hasCreatedTestDest = true;
            }
        });

        expect(hasCreatedTestDest).to.equal(true);
    });
});