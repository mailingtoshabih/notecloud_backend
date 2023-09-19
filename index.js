const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

const notesRoute = require('./routes/notesRoute');

const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URI;


mongoose.connect(mongoUrl)
    .then(() => console.log("Connected to db..."))
    .catch((error) => console.log(error.message));


const corsOptions = {
    origin: 'https://main--startling-peony-235010.netlify.app/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());


// Routes
app.use('/notes', notesRoute);


app.listen(port, () => {
    console.log(`Listening at ${port}...`);
})


