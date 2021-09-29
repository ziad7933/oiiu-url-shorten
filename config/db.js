//connect the database here
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');//grabs the global variables using config.get().

const connectDB = async () => {
    try {
        await mongoose.connect(db, { 
            useNewUrlParser: true
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;