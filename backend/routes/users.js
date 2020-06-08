var express = require('express');
var router = express.Router();
var userList = require('../temp.json');

router.get('/', function(req, res, next) {
  res.send(userList);
});
router.get('/:id',function(req,res){
  var str="";
  var len = userList.length;

  for(var i=0;i<len;i++){
    if(req.params.id==userList[i].id)
      str+=JSON.stringify(userList[i]);
  }
  res.send(str);
})
module.exports = router;
