var initialState = {content:[]};

const messReducer = (state = {},action) => {

   if(typeof state === undefined){
     return initialState;
   }
   switch(action.type){
   	case 'newMess':
   	 return Object.assign({},state,{
   	 	content:action.content
   	 })
   	default:
      return state
   }
}

export {messReducer} 