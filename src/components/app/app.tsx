import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import MainPage from '../../pages/main-page/main-page';
import Property from '../../pages/property/property';
import NotFound from '../404/not-found';
import PrivateRoute from '../private-route/private-route';


type AppProps = {
  offersCount: number;
}

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offersCount={offersCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorite}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorite}
          element={<Property />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
