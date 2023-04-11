import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import './App.css'
import HomeLayout from "./layouts/HomeLayout.jsx";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import GalleryPage from "./pages/Gallery.jsx";
import ContactsPage from "./pages/Contacts.jsx";
import App from "./App.jsx";
//
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <HomeLayout>
//             <HomePage />
//         </HomeLayout>,
//     },
//     {
//         path: "/about",
//         element: <DefaultLayout>
//             <AboutPage />
//         </DefaultLayout>,
//     },
//     {
//         path: "/projects",
//         element: <DefaultLayout>
//             <ProjectsPage />
//         </DefaultLayout>,
//     },
//     {
//         path: "/gallery",
//         element: <DefaultLayout>
//             <GalleryPage />
//         </DefaultLayout>,
//     },
//     {
//         path: "/contacts",
//         element: <DefaultLayout>
//             <ContactsPage />
//         </DefaultLayout>,
//     },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // <RouterProvider router={router} />
)
