const express = require ('express');
const router = express.Router();
const user = require ('../models/user');

router.get('/',(req,res) => {
    user.find({})
      .then((data) => {
        console.log('Data: ', data);
        res.json(data);
      })
      .catch((error) => {
        console.log('Error: ', error)
      })  
  });

  
  router.get('/name',(req,res) => {
    const data = {
        usern: 'shir',
        age: 5
    };
    res.json(data);
  });
    
  //get new data from the user and save it to db:
  router.post('/save',(req,res) => {
    const data = req.body;
    const newUser = new user (data);
    newUser.save((error) => {
        if (error) {
            res.status(500).json({
                msg: 'Internal server error'
             });
             return;
        } 
        return res.json({
            msg: 'Your user has been created'
        });
    });
  });
  
  module.exports = router;