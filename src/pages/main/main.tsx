import CardList from '../../components/card-list/card-list';
import CitiesList from '../../components/city-list/city-list';
import Header from '../../components/header/header';


const Main = (): JSX.Element => (
  <div className="page page--gray page--main">
    <Header />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <CardList />
        </div>
      </div>
    </main>
  </div>
);

export default Main;
