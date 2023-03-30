/* eslint-disable */
import { Routes, Route } from 'react-router-dom';

import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history'

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, CityLocation } from '../../const';



const App = (): JSX.Element => (
  <HistoryRouter history={browserHistory}>
    <Routes>
      <Route index element={<Main />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={`${AppRoute.Property}/:id`} element={
        <Property
          city={{ name: 'Amsterdam', location: CityLocation.Amsterdam }}
          nearbyOffers={[]}
          reviews={[]} />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute>
            <Favorites offers={[]} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HistoryRouter >
);

export default App;
