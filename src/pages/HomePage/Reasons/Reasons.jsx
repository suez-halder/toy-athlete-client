import { FaPencilRuler, FaBookOpen } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";

const Reasons = () => {
    return (
        <div>
            <div>
                <h2 className="text-2xl md:text-5xl font-bold text-center my-4 md:mt-16 rounded-md">Why Choose Toy Athlete?</h2>
                <p className="text-sm text-slate-500 md:text-base font-medium text-center w-full md:w-1/2 mx-auto mb-4 md:mb-8">Dive into a curated selection of top-quality toys that promote active play. Our commitment ensures kids engage, learn, and grow.</p>
            </div>
            <div 
            className="hero-content rounded-md  bg-fixed bg-blue-200 bg-opacity-50 flex flex-col md:flex-row justify-around  w-full h-full  p-12" 
            style={{ 
                backgroundImage: `url("https://i.ibb.co/zx2sD52/toy-home-fixed.png")`, 
                borderRadius: '0.375rem',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
             }}>
                <div className="max-w-md flex  flex-row  justify-around ">
                    <span className="text-4xl md:text-6xl text- text-blue-600 mr-4 mb-4"><FaPencilRuler /></span>
                    <div>
                        <h3 className="text-xl font-medium mb-2">Premium Quality Selection</h3>
                        <p className="text-[#545454]">At Toy Athlete, we believe in quality over quantity. Every toy that graces our shelves undergoes a rigorous selection process to ensure that it meets our high standards.</p>
                    </div>
                </div>
                <div className="max-w-md flex flex-row justify-around ">
                    <span className="text-4xl md:text-6xl  text- text-blue-600 mr-4 mb-4"><GiSoccerBall /></span>
                    <div>
                        <h3 className="text-xl font-medium mb-2">Encourage Active Play</h3>
                        <p className="text-[#545454]">In an age dominated by screens, we take pride in offering toys that get kids moving. Our products are curated to foster physical activity, from running and jumping to balancing and coordination</p>
                    </div>
                </div>
                <div className="max-w-md flex flex-row justify-around">
                    <span className="text-4xl md:text-6xl  text- text-blue-600 mr-4 mb-4"><FaBookOpen/></span>
                    <div>
                        <h3 className="text-xl font-medium mb-2">Educational and Fun</h3>
                        <p className="text-[#545454]">Our toys do more than just entertain; they educate. Through play, kids can explore new concepts, develop problem-solving skills, and ignite their creativity. Toy Athlete ensures that every toy provides an opportunity for children to learn while they have fun.</p>
                    </div>
                </div>
                


            </div>

        </div>
    );
};

export default Reasons;