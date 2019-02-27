const express=require('express');
//引入用户路由器
//const userRouter=require('./routes/user.js');
//const indexRouter=require('./routes/index.js');

//引入body-parser中间件
const bodyParser=require('body-parser');

/*
//使用CookieParser中间件，读取请求头中的Cookie头部，封装为req.cookies对象
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//自定义的中间件：向客户端发送一个Cookie
app.use(function(req, res, next){
  console.log('COOKIES:', req.cookies);
  //在响应消息中追加一个Cookie 
  res.cookie('siteName', 'TarenaSite'); 
  next();
})
*/

//创建web服务器
var app=express();
app.listen(3000);
//托管静态资源到public目录
app.use(express.static('public'));
//使用body-parser中间件来将post请求的数据解析为对象
//设置必须放在路由之前，只有设置好了，才能使用req.body
app.use(bodyParser.urlencoded({
  extended:false //不使用扩展的模块，而是使用nodejs提供的querystring模块解析为对象
}));
//使用路由器来管理路由
//把用户路由器挂载到/user下 
//访问形式  /user/register
//app.use('/user',userRouter);
//app.use('/index',indexRouter);

