var MongoClient = require('mongodb').MongoClient

function add_document (collection_name, document) {

  MongoClient.connect('mongodb://192.168.33.10:27017/outCode', function(err, db) {
    if(err) throw err;

    var collection = db.collection(collection_name);
    collection.insert(document, function(err, docs) {
        if (err) throw err;
        db.close();
      });
    });
  });
};

module.exports.add_document = add_document;