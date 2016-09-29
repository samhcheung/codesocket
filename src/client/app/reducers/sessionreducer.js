const sessionInitialState = {
  socket : null,
  room: ''
}

export default function sessionReducer (state = sessionInitialState, action) {
  switch(action.type){
    case 'UPDATE_SOCKET' : {
     return {
       ...state, 
       socket: action.socket
     }
    }
    case 'UPDATE_ROOM' : {
     return {
       ...state, 
       room: action.room
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