import { useState } from 'react';

import type { Offer } from '../../types/types';

import Card from '../card/card';

type CardListProps = {
    offers: Offer[];
};

const CardList = ({ offers }: CardListProps): JSX.Element => {
  // Переменная activeOffer понадобится позже
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          {...offer}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
};

export default CardList;
