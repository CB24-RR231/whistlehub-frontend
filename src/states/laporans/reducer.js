import { ActionType } from './action'

function laporansReducer(laporans = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_LAPORANS:
      return action.payload.laporans
    default:
      return laporans
  }
}

export default laporansReducer;
