let React = require('react');
// let ReactDOM = require('react-dom');


// import {Dform} from './util/form.js'
var TopBar  = require('./util/topBar.jsx')
var Footer = require('./util/footer.jsx')
var List  = require('./util/messList.jsx')
var index = React.createClass({
	childContextTypes: {
    socket: React.PropTypes.object,
    store:React.PropTypes.object
    },
    getChildContext: function() {
    return { socket: this.props.socket,
             store:this.props.store
     };
    },
    componentWillMount:function(){
        console.log('蛤蛤');
    },
	render:function(){
       
		return(
		<div id='main'>
		<TopBar />
        <span id='title'>聊天室 嗯 就是聊天室</span>
        <List />
        <Footer />
        </div>)
        
	}
})

module.exports = index
// export {index}

