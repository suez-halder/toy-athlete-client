import { Link } from "react-router-dom";


const ToyRow = ({toyRow}) => {
    // console.log(toyRow);
    const {_id, name, toyName, subCategory,toyPhoto, price, quantity} = toyRow;
    
    
    
    return (
        <tr>
            
            <td><img className="h-20 w-20 rounded-full bg-info mx-auto" src={toyPhoto} alt="" /></td>
            <td>{name}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{'$'+price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toy/${_id}`}><button  className=" btn btn-info hover:bg-blue-500 text-white">Details</button></Link></td>
        </tr>
    );
};

export default ToyRow;