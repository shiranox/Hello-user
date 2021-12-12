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

//this is making all the requests that are coming as json or urlencoded and make 
//things available on req.body on api.js so whenever we want to get req.body, 
// we will be able to get it (before that we would get body:'undefined'):
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
//extended should be true when the object is very nested and we want to go deep

/* //saving data to mongo:
const data = {
  title: 'Wellcome!',
  body: 'Lalalalala'
};

//instance of the model:
const newUser = new user (data); 
/*
newUser.save((error) => {
  if (error) {
    console.log ('Operation failed!');
  }
  else {
    console.log ('Data has been saved');
  }
});
*/ 

//HTTP request logger:
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));