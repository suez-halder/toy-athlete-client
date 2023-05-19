import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";
import { Toaster } from 'react-hot-toast';



const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="md:min-h-[calc(100vh-345px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default HomeLayout;