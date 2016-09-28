const sessionInitialState = {
  socket : null,
}

export default function sessionReducer (state = sessionInitialState, action) {
  switch(action.type){
    case 'UPDATE_SOCKET' : {
     return {
       ...state, 
       socket: action.socket
     }
    }
    default : {
     return state
    }
  }
}


//make copy of state
//  update property socket in copy
// return copy