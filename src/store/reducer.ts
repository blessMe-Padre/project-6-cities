/* eslint-disable */
import { createReducer } from '@reduxjs/toolkit';

import type { City, Offer, SortName, User, Comment } from '../types/types';

import { setCity, fetchOffers, fetchOffer, fetchNearbyOffers, setSorting, fetchUserStatus, loginUser, fetchComments, postComment } from './actions';
import { AuthorizationStatus, cities, CityLocation } from '../const';

type State = {
  city: City;
  offers: Offer[];
  isOffersLoading: boolean;
  offer: Offer | null;
  isOfferLoading: boolean;
  sorting: SortName;
  authorizationStatus: AuthorizationStatus;
  user: User['email'];
  nearbyOffers: Offer[];
  comments: Comment[];
};

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]],
  },
  offers: [],
  isOffersLoading: false,
  offer: null,
  isOfferLoading: false,
  sorting: 'Popular',
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: '',
  nearbyOffers: [],
  comments: [],
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
    .addCase(fetchOffer.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isOfferLoading = false;
    })
    .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
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
    })
    .addCase(postComment.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
});

