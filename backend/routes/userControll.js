var express=require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:false}));
//router.use(bodyParser.json);
var User = require('./mongouser');

router.post('/', function(req,res){
    console.log('served '+req.body.id+'   '+req.body.data);
    User.create({
        id:req.body.id,
        data:req.body.data
    })
    User.find({},function(err,users){
        if (err) return res.status(500).send("User 전체 조회 실패.");
        res.status(200).send(users);
    })
   
    return;
})
// 특정 유저 조회
// router.get('/:id',function(req,res){
//     console.log('!?!?');
//     User.findById(req.params.id,function(err,user){
//         if(err) return res.status(500).send("실패ㅠㅠ");
//         if(!user) return res.status(404).send("유저없어");
//         res.status(200).send(user);
//     })
// })
router.get('/all',function(req,res){
    User.find({},function(err,users){
        if (err) return res.status(500).send("User 전체 조회 실패.");
        res.status(200).send(users);
    })
})
module.exports = router;