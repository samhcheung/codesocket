const sessionInitialState = {
  socket : null,
  room: '',
  quill: null,
  modalopen: false
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
    case 'UPDATE_QUILL' : {
      return {
        ...state,
        quill: action.quill
      }
    }
    case 'DOC_SELECTION_MODAL' : {
     return {
       ...state, 
       modalopen: action.modalopen
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