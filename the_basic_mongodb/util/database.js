const mongodb = require('mongodb');

const MongoCLient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoCLient.connect('mongodb+srv://manuelgerolindev:PNnzD5HgD1ngZBO2@nodeguide.clwuke5.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client =>{
        console.log('connected');
        _db = client.db();
        callback();
    })
    .catch(err =>{
        console.log(err);
        throw err;
    })
}

const getDb = () =>{
    if(_db) {
        return _db
    }
    throw 'No database found!'
}   

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;