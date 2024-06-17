/**
 * @TODO: Create Redux store
 */
import { configureStore } from '@reduxjs/toolkit'
import laporansReducer from './laporans/reducer';

const store = configureStore({
  reducer: {
    laporans: laporansReducer
  }
});

export default store
