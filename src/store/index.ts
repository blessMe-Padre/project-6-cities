import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducer';
import { fetchOffers } from './actions';
import { createAPI } from '../services/api';


const api = createAPI();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

store.dispatch(fetchOffers());

export default store;
