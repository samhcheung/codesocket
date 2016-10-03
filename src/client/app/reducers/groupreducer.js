const sessionInitialState = {
  doclist: []
}

export default function sessionReducer (state = sessionInitialState, action) {
  switch(action.type){
    case 'UPDATE_DOC_LIST' : {
     return {
       ...state, 
       doclist: action.doclist
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