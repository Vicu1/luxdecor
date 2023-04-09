import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import AboutPage from "./pages/About.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import ContactsPage from "./pages/Contacts.jsx";

const App = () => {
    return (
        <Routes>
            <Route element={<HomeLayout/>}>
                <Route index element={<HomePage/>}></Route>
            </Route>
            <Route element={<DefaultLayout/>}>
                <Route path={'/about'} element={<AboutPage/>}></Route>
                <Route path={'/projects'} element={<ProjectsPage/>}></Route>
                <Route path={'/contacts'} element={<ContactsPage/>}></Route>
            </Route>
        </Routes>
    )
}
export default App
