var React = require('react');

// var Mess = require('./mess.jsx');
var messChange =  require('../../redux/messAction.js');
var Chat = React.createClass({
     contextTypes: {
        socket: React.PropTypes.object,
        store:React.PropTypes.object
     },
     initialBind:function(){
        var ok;
        return(ok|(ok=this.context.socket.on('news',function(data){
            this.newMessage(data)
        }.bind(this))));
     },
     newMessage:function(data){
        var tem = this.state.content.slice();
        tem.push(data)
        // this.setState({
        //   content:tem
        // })
        if(this.context.store){
        this.context.store.dispatch(messChange(tem));
        }
       // console.log(this.state.content.push);
       // this.scrollTop = this.scrollHeight ;
     },
     getInitialState:function(){
        // console.log(this.context.socket);
        if(this.context.store){
         let store = this.context.store;
         store.subscribe(function(){
         let newState = store.getState();
         this.setState({content:newState.content})
         }.bind(this))
         }
        return {
          content:[]
        }
     },
     componentDidMount:function(prevProps, prevState, prevContext){
        
       console.log(this.initialBind());
        
     },
     componentWillUpdate:function(nextProp,nextState){
        // console.log(nextState);
     },
     componentDidUpdate:function(){
       // this.scrollTop = this.scrollHeight;
        var c = this.chatbox;
        c.scrollTop = c.scrollHeight;
 
     },
	render:function(){
          // this.context.socket.on('news',this.newMessage(data));
        var messList=[];
        this.state.content.forEach(function(item,index){
             messList.push(<div className='mess' refs={index}>{item}</div>)
        })
		return(<div className='chatbox' ref={(ref) => this.chatbox = ref}>{messList}</div>)
	}
})

module.exports = Chat
