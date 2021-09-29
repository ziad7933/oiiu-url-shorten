const express = require('express'); //sets up basic express server.
const connectDB = require('./config/db');

const app = express(); //initializes app with express.

//Connect to database
connectDB();

app.use(express.json({ extended: false})); //allows to accept JSON data into API

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); //listens to port and then shows an output if success.
