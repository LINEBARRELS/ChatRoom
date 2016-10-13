let React = require('react');

var Dinput = React.createClass({
	contextTypes: {
        socket: React.PropTypes.object
    },
    upload:function(e){
        if(e.key==='Enter'){
     	this.context.socket.emit('message',e.target.value)
     	// console.log(e.target.value);
     	e.target.value = '';
       }

	},
	render:function(){
		if(this.props.type==='Chat!'){
			return(<input type='text' className='Bin' onKeyDown={this.upload} placeholder={this.props.type}/>)
		}
		else{
			return(<input type='text' className='Bin' placeholder={this.props.type}/>)
		}
		
	}
})

// export {Dinput}
module.exports = Dinput
