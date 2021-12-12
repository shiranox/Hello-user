import React from 'react';

const express = require ('express');
const morgan = require ('morgan');
const path = require ('path');
const mongoose = require('mongoose');
const app = express ();
const PORT = process.env.PORT || 8080; 

const routes = require ('./routes/api')

const MONGODB_URI = 'mongodb+srv://bittest:bit12345@cluster0.gircx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || 'mongodb://localhost/Shiran', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log("Mongoose - connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));