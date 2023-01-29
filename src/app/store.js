import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import busSliceReducer from '../features/bus/busSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    bus: busSliceReducer,
    counter: counterReducer,
  },
  middleware:(getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});
