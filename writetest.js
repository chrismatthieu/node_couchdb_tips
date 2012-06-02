var util = require('util');
var request = require('request');
var h = {accept:'application/json', 'content-type':'application/json'};
book = {};


// Writes records to a couchdb database
for (i = 11; i < 20; i++) {
	book.id = i;
	book.title = "book" + i;
	request({uri:'http://127.0.0.1:5984/books/' + i, method:'PUT', headers:h, body: JSON.stringify(book)}, function (err, response, body) {
		util.puts(body);
		console.log('created ' + i);
	})
   }

