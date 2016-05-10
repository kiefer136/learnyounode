var path = require('path');
var fs = require('fs');
var mymodule = require('./module.js');
var dir = process.argv[2];
var ext = process.argv[3];
   

fs.readdir(dir, function(err, files) {
  files.forEach(function(fileName) {
    if (path.extname(fileName) == '.' + ext) {
      console.log(fileName);
    };
  });
});