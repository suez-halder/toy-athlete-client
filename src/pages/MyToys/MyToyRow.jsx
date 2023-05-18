import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToyRow = ({myToyRow, handleDelete}) => {
    const {_id, name, toyName, price, subCategory, toyPhoto, quantity} = myToyRow;
    return (
        <tr>
            <td><img className="h-20 w-20 rounded-full bg-info mx-auto" src={toyPhoto} alt="" /></td>
            <td>{name}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{'$'+price}</td>
            <td>{quantity}</td>
            <td className="flex gap-6 justify-center ">
                <Link to={`/editToy/${_id}`}><FaPen className="text-xl text-blue-400 "></FaPen></Link>
                <FaTrash onClick={()=> handleDelete(_id)}  className="text-xl text-red-600 cursor-pointer"></FaTrash>
            </td>
        </tr>
    );
};

export default MyToyRow;