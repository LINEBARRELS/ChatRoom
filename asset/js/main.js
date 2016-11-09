var ReactDOM = require('react-dom');
var React = require('react');
var io = require('socket.io');

var Main = require('../component/main.jsx');

// import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { messReducer} from '../redux/messReducer.js'
var so = io();


// React.withContext({'socket': socket}, function () {
console.log(messReducer);
var store = createStore(messReducer);
ReactDOM.render(<Main socket={so} store={store}/>,document.querySelector('body'));
// });

// socket.emit('message','wtf')
// document.querySelector('.Bin').addEventListener('keydown',function(e){
//      if(e.key==='Enter'){
//      	socket.emit('message',this.value)
//      }
// })

// socket.on('news',function(data){
//    console.log(data);
// })

// console.log(so);