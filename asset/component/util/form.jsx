let React = require('react');

// import {Dinput} from 'input.js'
var Dinput = require('./input.jsx')

var Dform = React.createClass({
	getInitialState:function(){
        return {
        	now:'input'
        }
	},
	render:function(){
         var inputs=[];
         // for(let i=0;i<this.props.nes.length;i++){
         //     inputs.push(<Dinput type={this.props.nes[i]}/>);
         // }
         this.props.nes.forEach(function(item,index){
            inputs.push(<Dinput type={item}/>);
         })
         inputs.push(<input type='submit' value='提交' className='logsub'/>)

         return (<form id='Form' method='post' action='/login/dologin'>{inputs}</form>)
	}
})

// export {Dform}
module.exports = Dform