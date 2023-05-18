import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {

    const toyDetails = useLoaderData()
    console.log(toyDetails);
    
    
    return (
        <div>
            <h2>Single Toy Details here</h2>
        </div>
    );
};

export default ToyDetails;