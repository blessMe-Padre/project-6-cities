import Header from '../header/header';

function NotFound(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          404. Страница не найдена.
        </div>
      </main>
    </div>
  );
}

export default NotFound;
