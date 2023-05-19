import { Link } from "react-router-dom";


const Tennis = ({singleTennis}) => {
    const { _id, toyPhoto, toyName, price, rating } = singleTennis;
    return (
        <div className="card card-side bg-blue-200 shadow-2xl w-5/6 mx-auto my-4 text-center">
            <figure><img className="w-3/4 " src={toyPhoto} alt="Movie" /></figure>
            <div className="card-body w-full ">
                <h2 className="font-medium text-2xl text-center">{toyName}</h2>
                <p>Price: ${price}</p>
                <p><small>Rating: {rating}</small></p>
                <div className=" text-center mt-2">
                    <Link to={`/toy/${_id}`}>
                        <button className="btn hover:btn-info bg-blue-500 text-white border-none ">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tennis;