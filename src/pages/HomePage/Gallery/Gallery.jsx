
import Marquee from "react-fast-marquee";

const Gallery = () => {
    return (
        <div>
            <Marquee className="bg-blue-100 cursor-pointer" speed={200} pauseOnHover={true} >
                
                    <img className="w-1/3 h-full" src="https://i.ibb.co/JmWLzX4/baseball.png" alt="" />
                    <img className="w-1/3 h-full" src="https://i.ibb.co/Dp7sQjd/football.png" alt="" />
                    <img className="w-1/3 h-full" src="https://i.ibb.co/P1Tv45S/bat.png" alt="" />
                    <img className="w-1/3 h-full" src="https://i.ibb.co/cw22B6D/field.png" alt="" />
                    <img className="w-1/3 h-full" src="https://i.ibb.co/pwfqHzy/pong-Balls.png" alt="" />
                    <img className="w-1/3 h-full" src="https://i.ibb.co/vj5kKWk/whistle.png" alt="" />
                    <img className="w-1/3 h-full" src="https://i.ibb.co/bLxh1DN/helmet.png" alt="" />
                    <img className="w-1/3 h-full" src="https://i.ibb.co/khztjYn/medel.png" alt="" />
                    <img className="w-1/3 h-full" src="https://i.ibb.co/gM8xKwm/table.png" alt="" />

               


            </Marquee>

        </div>
    );
};

export default Gallery;