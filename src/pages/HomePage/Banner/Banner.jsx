



// https://i.ibb.co/pb78dVP/homepage-banner.png

import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero h-96 rounded-md" style={{ backgroundImage: `url("https://i.ibb.co/d7hZPDV/homepage-banner-edited.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content bg-[#4CB7CF] bg-opacity-80 rounded-2xl w-full md:w-2/3 h-2/3">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-semibold">Get 35% off</h1>
                    <p className="mb-5 text-3xl font-medium">On All Toys</p>
                    
                    <Link to='/allToys'><button className="btn hover:bg-[#4CB7CF] bg-info border-none px-8 md:px-12 md:tracking-widest text-blue-700">Shop Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;