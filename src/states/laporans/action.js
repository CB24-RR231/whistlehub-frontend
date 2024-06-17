import api from '../../utils/api';

const ActionType = {
  GET_LAPORANS: 'GET_LAPORANS',
  ADD_LAPORAN: 'ADD_LAPORAN'
}

function addLaporan(laporan) {
  return {
    type: ActionType.ADD_LAPORAN,
    payload: {
      laporan
    }
  }
}

function getLaporans(laporans) {
  return {
    type: ActionType.GET_LAPORANS,
    payload: {
      laporans
    }
  }
}

function asyncAddLaporan(laporan) {
  return async (dispatch) => {
    try {
      const newLaporan = await api.addForm(laporan);
      dispatch(addLaporan(newLaporan))
    } catch (error) {
      alert(error.message)
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
  addLaporan,
  getLaporans,
  asyncAddLaporan,
  asyncGetLaporans
}
