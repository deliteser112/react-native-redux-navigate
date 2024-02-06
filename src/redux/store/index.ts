import {configureStore} from '@reduxjs/toolkit';
import apiReducer from '../slices/apiSlice';

export default configureStore({
  reducer: {
    api: apiReducer,
  },
});
