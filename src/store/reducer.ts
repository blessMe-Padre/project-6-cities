/* eslint-disable */
import { createReducer } from '@reduxjs/toolkit';

import type { City, Offer, SortName } from '../types/types';

import { setCity, setOffers, setSorting } from './actions';
import { cities, CityLocation } from '../const';

type State = {
  city: City;
  offers: Offer[];
  sorting: SortName;
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]],
  },
  offers: [],
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
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
