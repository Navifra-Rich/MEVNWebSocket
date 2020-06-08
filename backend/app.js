const express = require('express');
const app =express();
app.use(express.static('public'));
var userRouter = require('./routes/users.js');

app.get('/',(req,res)=>res.send('aa, world?'))
app.get('/a',(req,res)=>res.send('Hello, world?'))
app.get('/abc',function(req,res) {
  var html ='abcde<img src="./public/img/logo.png">';
  res.send(html);
});
//app.removeListener(3000,()=> console.log('example App'));
app.get('/arhen/:abc',(req, res)=> res.send('arhentina<br >'+req.params.abc))


app.use('/api/user',userRouter);

module.exports = app;
