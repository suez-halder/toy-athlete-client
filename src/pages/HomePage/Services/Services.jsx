import { FaMoneyCheck, FaShieldAlt, FaTruck } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {
    AOS.init();
    
    return ( 
        <div className="hero h-56 rounded-md my-8" style={{ backgroundImage: `url("https://i.ibb.co/51bVYyv/services.jpg")` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content rounded-xl text-center bg-sky-300 bg-opacity-60  flex flex-col md:flex-row justify-around  w-full h-full ">
                <div className="max-w-md " data-aos="fade-right" data-aos-delay="500">
                    <span className="text-5xl text- text-blue-500 "><FaTruck className="mb-2 mx-auto"></FaTruck></span>
                    <h3 className="text-xl font-medium mb-2">Free Shipping</h3>
                    <p className="text-[#545454]">Start from $100</p>
                </div>
                <div className="max-w-md " data-aos="flip-up" data-aos-delay="300">
                    <span className="text-5xl text- text-blue-500 "><FaMoneyCheck className="mb-2 mx-auto"></FaMoneyCheck></span>
                    <h3 className="text-xl font-medium mb-2">Money Back Guarantee</h3>
                    <p className="text-[#545454]">Back within 25 days</p>
                </div>
                <div className="max-w-md " data-aos="fade-up-left" data-aos-delay="300">
                    <span className="text-5xl text- text-blue-500 "><FaShieldAlt className="mb-2 mx-auto"></FaShieldAlt></span>
                    <h3 className="text-xl font-medium mb-2">Secure Payment</h3>
                    <p className="text-[#545454]">Payment Security</p>
                </div>
                
            </div>
        </div>
    );
};

export default Services;