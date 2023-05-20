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
                    <div className="hero-content flex-col gap-10 md:gap-24 lg:flex-row bg-sky-100 bg-red-500 rounded-md">
                        <img className="w-1/2 md:w-full" src={toyPhoto} />
                        <div>
                            <div className="flex justify-between ">
                                <div>
                                    <h1 className="text-xl md:text-3xl font-bold mb-4">{toyName}</h1>
                                </div>
                                <div>
                                    <p className="text-blue-900 text-2xl md:text-5xl mr-10">${price}</p>
                                </div>
                            </div>
                            <div className="rating ">
                                {renderRatingStars()}
                            </div>
                            <p className="py-6">{description}</p>
                            <p className="font-bold">Availability: {quantity} </p>
                            <p className="font-medium">Seller Name: {name} </p>
                            <p className="font-medium">Email: {email} </p>



                        </div>
                    </div>
                </div>
                <div className="hero-content text-center">
                    <div>
                        <button onClick={() => { navigate(-1)}} className=" btn btn-info hover:bg-blue-500 text-white flex gap-2"> <FaArrowLeft></FaArrowLeft>  Back</button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ToyDetails;