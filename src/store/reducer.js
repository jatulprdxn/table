const intialState = {
  users:[],
  text:''
}

const reducer = (state = intialState,action) => {
  switch(action.type) {
    case "FETCH":
      return {
        ...state,
        users:action.payload
      }
      case "UPDATEFLAG":
        return {
          ...state,
          users:action.payload
        }
      case "UPDATEDETAIL":
        console.log("Enter",action.payload);
        return {
          ...state,
          users:action.payload
        } 
        case "SETTEXT":
       return {
        ...state,   
        text:action.payload
      }
      case "DELETE":
        return {
         ...state,   
         users:action.payload
        }        
    default: 
      return state;  
  }
}

export default reducer;