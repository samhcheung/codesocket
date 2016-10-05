const sessionInitialState = {
  socket : null,
  room: '',
  quill: null,
  modalopen: false,
  videoChannelReady: false,
  pc: null
}

export default function sessionReducer (state = sessionInitialState, action) {
  switch(action.type){
    case 'UPDATE_SOCKET' : {
     return {
       ...state, 
       socket: action.socket
     }
    }    
    case 'VIDEO_CHANNEL_READY' : {
     return {
       ...state, 
       videoChannelReady: action.videoChannelReady
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
    case 'UPDATE_PC' : {
     return {
       ...state, 
       pc: action.pc
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