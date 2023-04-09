import {Link, Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";

const HomeLayout = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Outlet/>
                </div>
            </main>
        </>
    )
}
export default HomeLayout
