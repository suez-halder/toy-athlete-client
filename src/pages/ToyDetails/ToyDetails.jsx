import { useLoaderData } from "react-router-dom";
import ToyBanner from "../Shared/ToyBanner";


const ToyDetails = () => {

    const toyDetails = useLoaderData()
    // console.log(toyDetails);
    const {description, email, name, price, quantity, rating, toyName, toyPhoto} = toyDetails;
    
    
    return (
        <div>
            <div><ToyBanner>{toyName} Details Here</ToyBanner></div>
            <div>
                <img src={toyPhoto} alt="" />
            </div>

        </div>
    );
};

export default ToyDetails;