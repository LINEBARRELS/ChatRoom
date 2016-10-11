var React = require('React');

var TopBar=React.createClass({
	getInitialState:function(){
		return {show:'total'}
	},
	render:function(){
		let re = null;
		return (<nav  className='top' ><span className='logo'></span></nav>)
	}
})

module.exports = TopBar