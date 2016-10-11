var React = require('react');

// var Mess = require('./mess.jsx');

var Chat = React.createClass({
     contextTypes: {
        socket: React.PropTypes.object
     },
     newMessage:function(data){
        var tem = this.state.content.slice();
        tem.push(data)
        this.setState({
          content:tem
        })
       // console.log(this.state.content.push);
     },
     getInitialState:function(){
        return {
          content:[]
        }
     },
     componentDidMount:function(prevProps, prevState, prevContext){
     this.context.socket.on('news',function(data){
        this.newMessage(data)
      }.bind(this));
     },
     componentWillUpdate:function(nextProp,nextState){
        console.log(nextState);
     },
	render:function(){
          // this.context.socket.on('news',this.newMessage(data));
        var messList=[];
        this.state.content.forEach(function(item,index){
             messList.push(<div className='mess'>{item}</div>)
        })
		return(<div className='chatbox'>{messList}</div>)
	}
})

module.exports = Chat