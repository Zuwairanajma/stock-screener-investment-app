import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { stockSlice } from './stockSlice';
import { balanceSheetSlice } from './balanceSheetSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    stocks: stockSlice.reducer,
    balanceSheets: balanceSheetSlice.reducer,
  },
});

export default store;
