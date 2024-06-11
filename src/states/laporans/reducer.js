import { ActionType } from './action'

function laporansReducer(laporans = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LAPORANS:
      return action.payload.laporans
    default:
      return laporans
  }
}

export default laporansReducer;
