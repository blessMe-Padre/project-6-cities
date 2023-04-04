/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';
import { rootReducer } from './root-reducer';
import { fetchOffers, fetchUserStatus } from './actions';
import history from '../history';

const api = createAPI();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api,
        history
      },
    },
  }),
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchOffers());

export default store;

