var http = require('http');
var link = process.argv[2]

http.get(link, function(res) {
  res.on('data', function(data) {
    console.log(data.toString());  
  })
});






// var request = require('request');
// link = process.argv[2];

// request(link, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(countWords(body));
//   };
// });




