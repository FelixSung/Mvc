var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var hour = new Date().getHours();
  res.render('index', {
      title: '首页',
      am:hour <= 12,
      pm:hour > 12 && hour <18,
      night:hour >=18,
      productList:[
          {id:1,name:'66大促/单件包邮 收腰显瘦连衣裙',price:89,image:'http://img.alicdn.com/bao/uploaded/TB1NIqZIXXXXXaLXpXXSutbFXXX.jpg'},
          {id:2,name:'卡通星星女孩印花小圆领修身短袖T恤',price:75,image:'http://img.alicdn.com/bao/uploaded/TB1NIqZIXXXXXaLXpXXSutbFXXX.jpg'},
          {id:3,name:'66大促/单件包邮 花朵印花无袖背心',price:59,image:'http://img.alicdn.com/bao/uploaded/TB1Hy1KIXXXXXcOXFXXSutbFXXX.jpg'},
          {id:4,name:'格纹格子拼色高腰修身棉麻半身裙A字裙',price:75,image:'http://img.alicdn.com/bao/uploaded/TB1EdGZIXXXXXXuXFXXSutbFXXX.jpg'},
          {id:5,name:'欧洲站夏季镂空卡通两件套韩版连衣裙',price:98,image:'http://img.alicdn.com/bao/uploaded/TB1ANrBIXXXXXc9XFXXSutbFXXX.jpg'},
          {id:6,name:'性感露背连衣裤',price:259,image:'http://img.alicdn.com/bao/uploaded/TB1qp6QIXXXXXXMXFXXSutbFXXX.jpg'},
          {id:7,name:'上品行欧洲站夏季彩色两件套连衣裙',price:108,image:'http://img.alicdn.com/bao/uploaded/TB1HHaOIXXXXXbOXFXXSutbFXXX.jpg'},
          {id:8,name:'MIUCOT恤+绣花七分牛仔裤套装',price:218,image:'http://img.alicdn.com/bao/uploaded/TB1IrW7IXXXXXaKXpXXSutbFXXX.jpg'},
      ],
      partials:{footer:'footer'}
  });
});

module.exports = router;
