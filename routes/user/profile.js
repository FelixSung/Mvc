/**
 * Created by FelixSung on 2015/6/10.
 */
var express = require('express');
var router = express.Router();

router.route('/').get(function(req,res,next){
    res.render('user/profile',{title:'个人信息'});
});

module.exports = router;
