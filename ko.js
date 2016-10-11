var koa = require('koa');
var app = koa();
var mount = require('koa-mount');
var router = require('koa-router');
var serve = require('koa-static');
var session = require('koa-session');
//socket.io
var socketio = require('socket.io');
//React support
var React = require('react');
var ReactDOMServer = require('./node_modules/react-dom/server.js');
require('node-jsx').install({
    extension:'.jsx'
});
//Nedb
var datastore = require('nedb'),
    db= new datastore({filename:'./DB/userDB.json',autoload:true});





var Pindex = require('./asset/component/main.jsx');
var Plogin = require('./asset/component/login.jsx')

function fullPage(html,css,js){
	return "<!DOCTYPE html><html lang='en'><head><link rel='stylesheet' type='text/css'href='./"+css+"'></link><script src='./socket.io.js'></script><script src='./react.min.js'></script><script src='./react-dom.min.js'></script></head><body>"+html+"</body><script src='./"+js+"'></script></html>"
}




var loginCheck=function *(next){
  
  var sessionS = this.session.logstatus||'n';
  var cookieS = this.cookies.get('logstatus',{signed:true})

  if(sessionS.toString()!== cookieS){
    console.log(typeof this.cookies.get('logstatus',{signed:true}));
    console.log(typeof this.session.logstatus);
    this.redirect('/login');
  } 

  
  yield next; 
}

// render index to string
var indexRender=function *(){

  let index = React.createFactory(Pindex)
  this.body = fullPage(ReactDOMServer.renderToString(index()),'main.css','index.js');
}

//render loginpage to string
var loginRender=function *(){
  let loginPage = React.createFactory(Plogin)
  this.body=fullPage(ReactDOMServer.renderToString(loginPage({types:['Id','password']})),'login.css')
}

var doLogin = function *(){
  // db.insert({name:'li',password:'123z'},function(err){
  //   if(err){
  //   	console.log('somethings wrong');
  //   }
  // })
  let ram =Math.random();
  this.session.logstatus= ram;
  let date = new Date();
  date.setMinutes(date.getMinutes()+1)
  this.cookies.set('logstatus',ram,{signed:true,expires:date})
  this.body='呵呵呵呵呵'
}

//prepare to search userinfo
var nu = function *(){

	if(this.req.path==='/'){
		console.log(this.req.path);
		this.res.status=404;
	}
	else{
		this.body = fullPage('<div>蛤蛤</div>');
	}
}

//router
var index=new router();
index.get('',indexRender);

var user=new router();
user.get('/:user',loginCheck,nu)

var login = new router();

login.get('',loginRender).post('/dologin',doLogin)

var message = new router();

message.post('')

//key
app.keys = ['some secret hurr'];
app.use(session(app));

//静态资源部署
app.use(serve(__dirname+'/asset/css'));
app.use(serve(__dirname+'/asset/js'));
app.use(serve(__dirname+'/asset/img'));
app.use(serve(__dirname+'/asset/font'));
app.use(serve(__dirname+'/dist'));
//绑定路径
app.use(mount('/',index.routes()));
app.use(mount('/name',user.routes()));
app.use(mount('/login',login.routes()));

// app.listen(8080);
var http = require('http').Server(app.callback());

var io = socketio(http);

io.on('connection',function(socket){
  console.log('new user connect!:id'+socket.id);
  socket.on('message',function(data){
   io.emit('news',data)
   console.log(data);
  })
  io.emit('news','一个新的傻逼加入了撕逼')
})



http.listen(8080)