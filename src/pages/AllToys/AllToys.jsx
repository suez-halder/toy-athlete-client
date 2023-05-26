import { useLoaderData } from "react-router-dom";
import ToyBanner from "../Shared/ToyBanner";

import ToyRow from "./ToyRow";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { updateDocumentTitle } from "../../utils/FunctionTitle";

const AllToys = () => {
    updateDocumentTitle("Toy Athlete | All Toys")
    const allToys = useLoaderData()
    const [searchText, setSearchText] = useState("");
    const [toySearch, setToySearch] = useState(allToys)


    // console.log(toySearch);
    // console.log(allToys);


    const handleSearch = () => {

        fetch(`https://toy-athlete-server.vercel.app/alltoys/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToySearch(data);
            })
            

    }

    return (
        <div>
            <div><ToyBanner>All Toys List</ToyBanner></div>
            {/* search */}
            <div className="w-1/5 mx-auto">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 flex items-center">
                    <div className="relative">
                        <input onChange={(e) => setSearchText(e.target.value)} id="search" name="search" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Search Toy" />
                        <label htmlFor="search" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm text-center">Search by Toy Name</label>
                    </div>
                    <div className="text-center">
                        <button onClick={() => handleSearch()} className="bg-[#4CB7CF] hover:bg-info text-white rounded-md p-3 mb-4"><FaSearch></FaSearch> </button>
                    </div>
                </div>
            </div>
            
            {/* table */}
            <div>
                <div className="overflow-x-auto border border-blue-300 rounded-xl shadow-lg shadow-blue-600 md:mb-8">
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
                                toySearch.map((toyRow) => <ToyRow
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