import { useLoaderData } from "react-router-dom";
import ToyBanner from "../Shared/ToyBanner";
import ToyRow from "./ToyRow";


const AllToys = () => {

    const allToys = useLoaderData()
    // console.log(allToys);
    
   
    
    return (
        <div>
            <div><ToyBanner>All Toys List</ToyBanner></div>
            <div>
                <div className="overflow-x-auto mt-8 border border-blue-400">
                    <table className="table table-zebra w-full text-center">
                        {/* head */}
                        <thead >
                            <tr>
                                <th>Toy Photo</th>
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
                                    allToys.map((toyRow) => <ToyRow
                                    key={toyRow._id}
                                    toyRow={toyRow}
                                 
                                    ></ToyRow>)
                                }
                            {/* row 2 */}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;