import {TOADMIN} from '../constants/adminConst';

export function ToAdmin(toAdmin){
  return {
    type:TOADMIN,
    toAdmin
  }
}
