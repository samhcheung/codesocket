const sessionInitialState = {
  socket : null,
  room: '',
<<<<<<< 703f9f414a22cb87b0027cce6326d398340d5bfa
  quill: null
=======
  modalopen: false
>>>>>>> wired up React Modal to surface join room popup
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
<<<<<<< 703f9f414a22cb87b0027cce6326d398340d5bfa
    case 'UPDATE_QUILL' : {
      return {
        ...state,
        quill: action.quill
      }
=======
    case 'DOC_SELECTION_MODAL' : {
     return {
       ...state, 
       modalopen: action.modalopen
     }
>>>>>>> wired up React Modal to surface join room popup
    }
    default : {
     return state
    }
  }
}


//make copy of state
//  update property socket in copy
// return copy