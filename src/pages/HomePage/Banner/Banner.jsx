



// https://i.ibb.co/pb78dVP/homepage-banner.png

import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero h-96 rounded-md" style={{ backgroundImage: `url("https://i.ibb.co/d7hZPDV/homepage-banner-edited.png")` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center  bg-sky-200 bg-opacity-80 rounded-2xl w-full md:w-2/3 h-2/3 shadow-lg">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-semibold tracking-wider shadow-lg rounded-2xl p-3">Get 35% Off</h1>
                    <p className="mb-5 text-3xl font-medium">On All Toys</p>
                    
                    <Link to='/allToys'><button className="btn hover:bg-[#4CB7CF] bg-info border-none px-8 md:px-12 md:tracking-widest text-blue-700 shadow-2xl ">Shop Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;