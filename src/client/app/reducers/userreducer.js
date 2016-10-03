const userInitialState = {
  userName: 'Anonymous',
  myInserts: [],
  isInitiator: false
}

export default function userReducer (state = userInitialState, action) {
  switch(action.type){
    case 'UPDATE_USER' : {
     return {
       ...state, 
       userName: action.userName
     }
    }
    case 'UPDATE_EDITOR_INSERTS' : {
     return {
       ...state, 
       myInserts: action.myInserts
     }
    }
    case 'SET_INITIATOR' : {
     return {
       ...state, 
       isInitiator: action.isInitiator
     }
    }
    default : {
     return state
    }
  }
}