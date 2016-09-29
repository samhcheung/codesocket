const userInitialState = {
  userName: 'Anonymous',
  myInserts: []
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
    default : {
     return state
    }
  }
}