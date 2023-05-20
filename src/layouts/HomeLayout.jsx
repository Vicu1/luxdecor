import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default HomeLayout;
