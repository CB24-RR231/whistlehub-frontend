import api from '../../utils/api';

const ActionType = {
  GET_LAPORANS: 'GET_LAPORANS',
}

function getLaporans(laporans) {
  return {
    type: ActionType.GET_LAPORANS,
    payload: {
      laporans
    }
  }
}

function asyncGetLaporans() {
  return async (dispatch) => {
    try {
      const laporans = await api.getLaporans();
      dispatch(getLaporans(laporans))
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  getLaporans,
  asyncGetLaporans
}
