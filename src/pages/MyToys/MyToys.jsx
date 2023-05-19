import { useState } from "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyBanner from "../Shared/ToyBanner";
import MyToyRow from "./MyToyRow";



const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])

    const url = `http://localhost:3000/allToys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [url])

    const handleDelete = id =>{
        const proceed = confirm("Do you want  to delete?");
        if(proceed){
            fetch(`http://localhost:3000/toy/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                if(data.deletedCount>0){
                    alert("Deleted Successfully");
                    const remaining = myToys.filter(booking => booking._id != id);
                    setMyToys(remaining);
                    
                }
            })
        }
    }

    


    
    
    
    return (
        <div>
            <div><ToyBanner>My Added Toys</ToyBanner></div>
            <div className="overflow-x-auto mt-8 border border-blue-400">
                    <table className="table table-zebra w-full text-center">
                        {/* head */}
                        <thead >
                            <tr>
                                <th className="bg-info">Toy Photo</th>
                                <th className="bg-blue-300">Seller Name</th>
                                <th className="bg-info">Toy Name</th>
                                <th className="bg-blue-300">Sub-category</th>
                                <th className="bg-info">Price</th>
                                <th className="bg-blue-300">Quantity</th>
                                <th className="bg-info">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                                {
                                    myToys.map(myToyRow => <MyToyRow 
                                        key={myToyRow._id}
                                        myToyRow={myToyRow}
                                        handleDelete={handleDelete}
                                    ></MyToyRow> )
                                }
                            {/* row 2 */}
                            
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default MyToys;