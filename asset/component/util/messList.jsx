var React = require('react')

var Dinput = require('./input.jsx')
var Chat = require('./chat.jsx')
var List = React.createClass({

	render:function(){
		return(
			<div className='box'>
            <Chat />
			<Dinput type='Chat!'/>
			</div>)
	}
})

module.exports = List

