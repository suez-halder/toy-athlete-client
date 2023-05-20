import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Tennis = ({ singleTennis }) => {
    const { _id, toyPhoto, toyName, price, rating } = singleTennis;

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
        <div className="card card-side bg-blue-200 shadow-2xl w-full md:w-5/6 mx-auto my-4 text-center">
            <figure>
                <img className="w-3/4" src={toyPhoto} alt="Movie" />
            </figure>
            <div className="card-body w-full">
                <h2 className="font-medium text-2xl text-center">{toyName}</h2>
                <p>Price: ${price}</p>
                <div className="rating flex justify-center items-center w-1/2 mx-auto">
                    {renderRatingStars()}
                </div>
                <div className="text-center mt-2">
                    <Link to={`/toy/${_id}`}>
                        <button onClick={() => toast.success('You have to log in first to view details', {

                            duration: 3000,
                            position: 'top-center',
                        })}
                            className="btn btn-info hover:bg-blue-500 text-white border-none">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tennis;
