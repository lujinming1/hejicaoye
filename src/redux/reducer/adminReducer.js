import {TOADMIN} from '../constants/adminConst'

function AdminReducer(state=false, action){
  switch (action.type) {
    case TOADMIN:
        return action.toAdmin;
    default: return state;
  }
}

export default AdminReducer;
