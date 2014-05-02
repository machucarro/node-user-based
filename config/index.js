var fs = require('fs'), path = require('path');
/*
 * This code is used to scan all the config files in the directory so they can be separated
 * into different files depending on their domain. This is done to satisfy the open-closed-principle
 * (open for extension but closed for modification)
 */
var files = fs.readdirSync('.');

files.forEach(function (file) {
    var filePath = path.resolve('./', file),
            config = require(filePath);
    exports[file] = config;
});