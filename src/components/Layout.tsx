import {Outlet} from 'react-router-dom';
import Header from './Header';

export function Layout() {
  return (
    <main className="main">
      <div className="wrapper">
        <Header/>
        <Outlet/>
      </div>
    </main>
  );
}
