var express = require('express');
var router = express.Router();

/* GET login page. */
router.route('/').get(function(req,res){
    //res.setHeader('Content-Type','text/html;charset=UTF-8');
    res.render('login', { title: '登录' });
}).post(function(req,res){
    res.writeHead(200,
        {'Content-Type':'application/Json;charset=UTF-8'});
    if(req.body.userName.trim() == 'admin' && req.body.password.trim() == '111111'){
        res.write('{"isSuccess":true}');
    }else{
        res.write('{"isSuccess":false,"errMsg":"用户名或密码不正确！"}');
    }
    res.end();
});

module.exports = router;
