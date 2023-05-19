import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";



const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;