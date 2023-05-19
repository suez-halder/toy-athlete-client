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
                <div className="overflow-x-auto mt-8 border border-blue-300 rounded-xl">
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
                                <th className="bg-info">Details</th>
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