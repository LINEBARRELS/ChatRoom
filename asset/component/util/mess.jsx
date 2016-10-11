var React = require('react')

var Mess = React.createClass({
	render:function(){
		return (<div className='mess'>{this.props.content}</div>)
	}
})