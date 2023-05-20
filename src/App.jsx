import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import HomeLayout from './layouts/HomeLayout.jsx';
import DefaultLayout from './layouts/DefaultLayout.jsx';
import AboutPage from './pages/About.jsx';
import ContactsPage from './pages/Contacts.jsx';
import ServicesPage from './pages/Services';
import GalleryPage from './pages/Gallery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
const App = () => {

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route
          index
          element={<HomePage />}
        ></Route>
      </Route>
      <Route element={<DefaultLayout />}>
        <Route
          path={'/about'}
          element={<AboutPage />}
        ></Route>
        <Route
          path={'/services'}
          element={<ServicesPage />}
        ></Route>
        <Route
          path={'/gallery'}
          element={<GalleryPage />}
        ></Route>
        <Route
          path={'/contacts'}
          element={<ContactsPage />}
        ></Route>
      </Route>
    </Routes>
  );
};
export default App;
