let React = require('react');
// let ReactDOM = require('react-dom');


// import {Dform} from './util/form.js'
var TopBar  = require('./util/topBar.jsx')
var Footer = require('./util/footer.jsx')
var List  = require('./util/messList.jsx')
var index = React.createClass({
	childContextTypes: {
    socket: React.PropTypes.object.isRequired
    },
    getChildContext: function() {
    return { socket: this.props.socket };
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

