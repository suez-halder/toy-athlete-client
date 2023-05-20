import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { updateDocumentTitle } from "../../utils/FunctionTitle";
import ToyBanner from "../Shared/ToyBanner";


const ToyDetails = () => {
    updateDocumentTitle("Toy Athlete | Toy Details")

    const toyDetails = useLoaderData()
    // console.log(toyDetails);
    const navigate = useNavigate()
    const { description, email, name, price, quantity, rating, toyName, toyPhoto } = toyDetails;

    const renderRatingStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(
                <input
                    key={i}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-blue-500"
                />
            );
        }
        return stars;
    };

    return (
        <div>
            <div><ToyBanner>{toyName} Details Here</ToyBanner></div>
            <div className="my-10">
                <div className="hero">
                    <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0  bg-sky-100 shadow-inner shadow-blue-600  rounded-md">
                        <img className="w-1/2 md:w-3/4 mx-auto" src={toyPhoto} />
                        <div className="w-4/5 mx-auto ">
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="text-xl md:text-3xl font-bold mb-4">{toyName}</h1>
                                </div>
                                <div>
                                    <p className="text-blue-900 text-2xl md:text-4xl">${price}</p>
                                </div>
                            </div>
                            <div className="rating ">
                                {renderRatingStars()}
                            </div>
                            <p className="py-6 text-justify">{description}</p>
                            <p className="font-bold text-lg">Availability: {quantity} </p>
                            <p className="font-medium">Seller Name: {name} </p>
                            <p className="font-medium mb-8 md:mb-2">Email: {email} </p>
                        </div>
                    </div>
                </div>
                <div className="hero-content text-center mt-8">
                    <div>
                        <button onClick={() => { navigate(-1) }} className=" btn btn-info hover:bg-blue-500 text-white flex gap-2 px-8"> <FaArrowLeft></FaArrowLeft>  Back</button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ToyDetails;