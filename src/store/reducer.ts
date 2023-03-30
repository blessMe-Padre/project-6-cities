/* eslint-disable */
import { createReducer } from '@reduxjs/toolkit';

import type { City, Offer, SortName, User } from '../types/types';

import { setCity, fetchOffers, fetchUserStatus, setSorting, loginUser } from './actions';
import { AuthorizationStatus, cities, CityLocation } from '../const';

type State = {
  city: City;
  offers: Offer[];
  sorting: SortName;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User['email'];
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]],
  },
  offers: [],
  isOffersLoading: false,
  sorting: 'Popular',
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload],
      };
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload.email;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
});

