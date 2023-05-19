import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";



const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="md:min-h-[calc(100vh-345px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;