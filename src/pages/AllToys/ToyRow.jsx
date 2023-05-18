import { Link } from "react-router-dom";


const ToyRow = ({toyRow}) => {
    // console.log(toyRow);
    const {_id, name, toyName, subCategory, price, quantity} = toyRow;
    
    
    
    return (
        <tr>
            
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