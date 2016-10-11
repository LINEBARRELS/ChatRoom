let React = require('react');



var Dform = require('./util/form.jsx')
var login = React.createClass({
	render:function(){
        return(
        <div id='main'>
        <Dform nes={this.props.types}>
        </Dform>
        </div>)
	}
})


module.exports = login