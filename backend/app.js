const express = require('express');
const app =express();
//const db=require('./routes/mongo.js');
app.use(express.static('public'));


var userRouter = require('./routes/users.js');
app.use('/api/user',userRouter);

//app.get(/.*/,(req,res)=>res.sendFile('./public/index.html',{root:__dirname}))
//app.post(/.*/,(req,res)=>res.sendFile('./public/index.html',{root:__dirname}))




const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:pass1!@cluster0-qkh1p.gcp.mongodb.net/dbname?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true },function(err) {
      if (err) {
        console.error('mongodb connection error!!!!', err);
      }
      console.log('mongodb connected!!')
    },{ useNewUrlParser: true } );

var userControll = require('./routes/userControll.js')
app.use('/api/insert', userControll);
//app.use('/api/insert/:id', userControll);


module.exports = app;