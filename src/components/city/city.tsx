import type { CityName } from '../../types/types';

type CityProps = {
  name: CityName;
  isActive: boolean;
  onClick: (name: CityName) => void;
}

const City = ({ name, isActive, onClick }: CityProps): JSX.Element => {
  const handleCityClick = () => {
    onClick(name);
  };

  return (
    <li className="locations__item" onClick={handleCityClick}>
      <a className={`locations__item-link tabs__item${isActive ? ' tabs__item--active' : ''}`} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
};

export default City;
