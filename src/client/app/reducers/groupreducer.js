const groupInitialState = {
  doclist: []
}

export default function groupReducer (state = groupInitialState, action) {
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