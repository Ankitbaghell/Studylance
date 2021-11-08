const moongoose = require('mongoose');

moongoose.connect('mongodb://localhost/contactUS_db');  // Mongoose connected with DB

const db = moongoose.connection;    // to see connected or not

db.on('error',console.error.bind(console,'error connecting to DB')); // if error in connection

db.once('open',function(){
    console.log('successfully connected to DB');    // if up and runnning 
}); 

module.exports = db;