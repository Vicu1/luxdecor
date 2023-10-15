import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import DefaultLayout from './layouts/DefaultLayout.jsx';
import AboutPage from './pages/About.jsx';
import ContactsPage from './pages/Contacts.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import Webhosting from "./pages/Webhosting.jsx";
import Vpshosting from "./pages/Vpshosting.jsx";
import DedicatedServer from "./pages/DeidicatedServer.jsx";
const App = () => {

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
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
          path={'/web-hosting'}
          element={<Webhosting />}
        ></Route>
          <Route
          path={'/vps-hosting'}
          element={<Vpshosting />}
        ></Route>
          <Route
          path={'/dedicated-servers'}
          element={<DedicatedServer />}
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
