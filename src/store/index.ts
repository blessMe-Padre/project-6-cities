/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';
import { reducer } from './reducer';
import { fetchOffers, fetchUserStatus } from './actions';
import history from '../browser-history';

const api = createAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
      history,
    },
  }),
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchOffers());

export default store;
