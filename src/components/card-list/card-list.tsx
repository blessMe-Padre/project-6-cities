/* eslint-disable */
import type { SortName } from '../../types/types';

import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSorting } from '../../store/actions';
import { Comprator } from '../../const';
import Card from '../card/card';
import Map from '../map/map';
import SortingList from '../sorting-list/sorting-list';
import Spinner from '../spinner/spinner';

const CardList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector((state) => state.sorting);
  const activeCity = useAppSelector((state) => state.city);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const offers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city.name).sort(Comprator[state.sorting]));
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseEnter = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const onSortingChange = (name: SortName) => {
    dispatch(setSorting(name));
  };

  if (isOffersLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
        <SortingList onChange={onSortingChange} activeSorting={activeSorting} />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              {...offer}
              onMouseMove={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map locations={offers.map(({ id, location }) => ({ id, ...location }))} city={activeCity} activeOffer={activeOffer} />
      </div>
    </>
  );
};

export default CardList;
