import { ActionType } from './action'

function laporansReducer(laporans = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_LAPORANS:
      console.log('Updating state with laporans:', action.payload.laporans); // Log the payload
      return action.payload.laporans
    default:
      return laporans
  }
}

export default laporansReducer;
