import { ActionType } from './action'

function laporansReducer(laporans = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_LAPORANS:
      return action.payload.laporans
    case ActionType.ADD_LAPORAN:
      return [...laporans, action.payload.laporan]
    default:
      return laporans
  }
}

export default laporansReducer;
