var MongoClient = require('mongodb').MongoClient

var connection_string = 'mongodb://127.0.0.1:27017/outCode';

function add_document (collection_name, document, success, error) {

  MongoClient.connect(connection_string, function(err, db) {
    if(err) throw console.log(err);

    var collection = db.collection(collection_name);
    collection.insert(document, function(err, docs) {
        if (err) {
        	error(err);
        }
      });
    db.close();
    	success("Successfully added data to the database");
    });
  };

function find_document (collection_name, document, success, error) {

  var MongoClient = require('mongodb').MongoClient;
  var format = require('util').format;

  MongoClient.connect(connection_string, function(err, db){
    if(err){ error(err); }

    var result= null;
    var collections = db
      .collection(collection_name)
      .find(document)
      .limit(1)
      .toArray( function(err, docs){
        console.dir(docs);
        if(err){ 
          error(err);
        } else {
          success(docs);
        }
      });
  });
  };
    
module.exports.find_document = find_document;

module.exports.add_document = add_document;