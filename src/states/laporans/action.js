import api from '../../utils/api'

const ActionType = {
  RECEIVE_LAPORANS: 'RECEIVE_LAPORANS',
}

function receiveLaporans(laporans) {
  return {
    type: ActionType.RECEIVE_LAPORANS,
    payload: {
      laporans
    }
  }
}

function asyncGetLaporans() {
  return async (dispatch) => {
    try {
      const laporans = await api.getLaporans()
      console.log(laporans);
      dispatch(receiveLaporans(laporans))
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  receiveLaporans,
  asyncGetLaporans
}
