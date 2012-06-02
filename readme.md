# CouchDB Tips

I'm not a big fan of using ports or brew to deploy apps to my machine. IrisCouch has a great deploy script for installing CouchDB on your localhost.
https://github.com/iriscouch/build-couchdb


## CREATE DATABASE
curl -X PUT http://127.0.0.1:5984/books

## WRITE RECORD
curl -X PUT http://127.0.0.1:5984/books/1 -d \
"{
\"_id\":\"1\", 
\"title\":\"couchdb the definitive guide\"
}"


## READ RECORD
curl -X GET http://127.0.0.1:5984/books/1


## DELETE RECORD
curl -X DELETE http://127.0.0.1:5984/books/1?rev#1-6e488095a5bf295b5880ce74846ca7bf

## UPDATE RECORD
curl -X PUT http://127.0.0.1:5984/books/1 -d \
"{
\"_id\":\"1\", 
\"_rev\":\"3-129ee86f127191d76c5560f10f06d082\",
\"title\":\"my book\"
}"


## MAP:
function(doc) {
  if (doc.title){
    emit(doc.title);
  }
}

Save as defaults / titles

## GET VIEW
curl -X GET http://127.0.0.1:5984/books/_design/default/_view/titles 


## GET VIEW with Doc
curl -X GET http://127.0.0.1:5984/books/_design/default/_view/titles -G -d include_docs#true
