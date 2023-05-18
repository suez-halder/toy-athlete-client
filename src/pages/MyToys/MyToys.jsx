import { useState } from "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyRow from "../AllToys/ToyRow";
import ToyBanner from "../Shared/ToyBanner";


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

    
    
    
    return (
        <div>
            <div><ToyBanner>My Added Toys</ToyBanner></div>
            <div className="overflow-x-auto mt-8 border border-blue-400">
                    <table className="table table-zebra w-full text-center">
                        {/* head */}
                        <thead >
                            <tr>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                                {
                                    myToys.map((toyRow) => <ToyRow
                                    key={toyRow._id}
                                    toyRow={toyRow}
                                 
                                    ></ToyRow>)
                                }
                            {/* row 2 */}
                            
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default MyToys;