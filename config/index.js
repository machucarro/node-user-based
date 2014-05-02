var fs = require('fs');
var path = require('path');
var nconf = require('nconf');
/*
 * This code is used to scan all the config files in the directory so they can be separated
 * into different files depending on their domain. This is done to satisfy the open-closed-principle
 * (open for extension but closed for modification)
 */

//
// 1. any overrides
//
nconf.overrides({});

//
// 2. `process.env`
// 3. `process.argv`
//
nconf.env().argv();


//
// 4. Values in config files
//
var files = fs.readdirSync('.');
files.forEach(function (file) {
    var filePath = path.resolve('./', file);
    nconf.file(filePath);
});

//
// 5. Any default values
//
nconf.defaults({});

module.exports = nconf;