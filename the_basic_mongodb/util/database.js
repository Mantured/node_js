const mongodb = require('mongodb');

const MongoCLient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoCLient.connect('mongodb+srv://manuelgerolindev:PNnzD5HgD1ngZBO2@nodeguide.clwuke5.mongodb.net/?retryWrites=true&w=majority')
    .then(client =>{
        console.log('connected');
        callback(client);
    })
    .catch(err =>{
        console.log(err);
    })
}

module.exports = mongoConnect;
