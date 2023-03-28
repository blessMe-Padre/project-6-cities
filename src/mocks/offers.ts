import { CityLocation } from '../const';
import type { Offer } from '../types/types';

const offers: Offer[] = [
  {
    id: 1,
    price: 200,
    rating: 4.4,
    title: 'Beautiful & luxurious apartment at great location',
    isPremium: true,
    isFavorite: false,
    location: CityLocation['Amsterdam'],
    city: {
      name: 'Amsterdam',
      location: CityLocation['Amsterdam'],
    },
    previewImage: 'img/apartment-01.jpg',
    type: 'apartment',
  },
  {
    id: 11,
    price: 400,
    rating: 5.0,
    title: 'Beautiful & luxurious apartment at great location',
    isPremium: true,
    isFavorite: false,
    location: CityLocation['Amsterdam'],
    city: {
      name: 'Amsterdam',
      location: CityLocation['Amsterdam'],
    },
    previewImage: 'img/apartment-01.jpg',
    type: 'apartment',
  },
  {
    id: 2,
    price: 20,
    rating: 3.4,
    title: 'A apartment at great location beautiful',
    isPremium: false,
    isFavorite: false,
    location: CityLocation['Paris'],
    city: {
      name: 'Paris',
      location: CityLocation['Paris']
    },
    previewImage: 'img/apartment-02.jpg',
    type: 'room',
  },
  {
    id: 3,
    price: 100,
    rating: 5.0,
    title: 'Great location apartment at great location',
    isPremium: true,
    isFavorite: true,
    location: CityLocation['Cologne'],
    city: {
      name: 'Cologne',
      location: CityLocation['Cologne']
    },
    previewImage: 'img/apartment-03.jpg',
    type: 'house',
  },
  {
    id: 4,
    price: 100,
    rating: 3.2,
    title: 'Luxurious & beautiful apartment at great location',
    isPremium: false,
    isFavorite: true,
    location: CityLocation['Hamburg'],
    city: {
      name: 'Hamburg',
      location: CityLocation['Hamburg']
    },
    previewImage: 'img/apartment-01.jpg',
    type: 'hotel',
  },
];

export default offers;
