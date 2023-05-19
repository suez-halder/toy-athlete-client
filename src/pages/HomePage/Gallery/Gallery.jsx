import Marquee from "react-fast-marquee";

const Gallery = () => {
    return (
        <div>
            <h2 className="text-2xl md:text-5xl font-bold text-center my-4 md:my-8">Our Exclusive Collections</h2>
            <p className="text-sm text-slate-500 md:text-base font-medium text-center mb-5 w-1/2 mx-auto">Here you will get top-quality sports toys for your kids. Explore our all toys and buy the best toys here.</p>
            <Marquee className="bg-blue-100 cursor-pointer p-2 md:p-4 my-5  " speed={100} pauseOnHover={true} >
                <div className="w-full h-full ">
                    <img className="w-[100px] md:w-[200px] h-full mr-20" src="https://i.ibb.co/JmWLzX4/baseball.png" alt="" />
                </div>
                <div className="w-full h-full ">
                    <img className="w-[100px] md:w-[200px] h-full mr-20" src="https://i.ibb.co/Dp7sQjd/football.png" alt="" />
                </div>

                <div className="w-full h-full  ">
                    <img className="w-[100px] md:w-[200px] h-full mr-20" src="https://i.ibb.co/P1Tv45S/bat.png" alt="" />
                </div>
                <div className="w-full h-full  ">
                    <img className="w-[100px] md:w-[200px] h-full mr-20" src="https://i.ibb.co/cw22B6D/field.png" alt="" />
                </div>
                <div className="w-full h-full  ">
                    <img className="w-[100px] md:w-[200px] h-full mr-20" src="https://i.ibb.co/pwfqHzy/pong-Balls.png" alt="" />
                </div>
                <div className="w-full h-full  ">
                    <img className="w-[100px] md:w-[200px] h-full mr-20" src="https://i.ibb.co/vj5kKWk/whistle.png" alt="" />
                </div>
                <div className="w-full h-full  ">
                    <img className="w-[100px] md:w-[200px] h-full mr-20" src="https://i.ibb.co/bLxh1DN/helmet.png" alt="" />
                </div>
                <div className="w-full h-full  ">
                    <img className="w-[100px] md:w-[200px] h-full mr-20" src="https://i.ibb.co/khztjYn/medel.png" alt="" />
                </div>
                <div className="w-full h-full  ">
                    <img className="w-[100px] md:w-[200px] h-full mr-20" src="https://i.ibb.co/gM8xKwm/table.png" alt="" />
                </div>
                <div className="w-full h-full  ">

                    <img className="w-[100px] md:w-[200px] h-full mr-20" src="https://i.ibb.co/SvbfJqD/pingPong.png" alt="" />
                </div>










            </Marquee>
        </div>
    );
};

export default Gallery;
