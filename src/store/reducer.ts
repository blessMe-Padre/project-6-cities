/* eslint-disable */
import { createReducer } from '@reduxjs/toolkit';

import type { City, Offer, SortName } from '../types/types';

import { setCity, fetchOffers, setSorting } from './actions';
import { cities, CityLocation } from '../const';

type State = {
  city: City;
  offers: Offer[];
  sorting: SortName;
  isOffersLoading: boolean;
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]],
  },
  offers: [],
  isOffersLoading: false,
  sorting: 'Popular',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload],
      };
    })
    .addCase(fetchOffers.pending, (state, action) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    });
});

