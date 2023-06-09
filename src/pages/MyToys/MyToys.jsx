import { useState } from "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyBanner from "../Shared/ToyBanner";
import MyToyRow from "./MyToyRow";
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { updateDocumentTitle } from "../../utils/FunctionTitle";

const MyToys = () => {
    updateDocumentTitle("Toy Athlete | My Toys")
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('default');

    const url = `https://toy-athlete-server.vercel.app/allToys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to play with this toy!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor:  '#3085d6',
            confirmButtonText: 'Yes, Delete!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://toy-athlete-server.vercel.app/toy/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.deletedCount > 0) {
                                const remaining = myToys.filter(booking => booking._id != id);
                                setMyToys(remaining);
                                toast.success('Toy Deleted Successfully',{
                                        duration: 2000,
                                        position: 'top-center',
                                })


                            }
                        })
                }
            })
    }

    const handleFilter = (event) => {
        const selectedValue = event.target.value;
        setSelectedFilter(selectedValue);

        const filterUrl = `https://toy-athlete-server.vercel.app/myToys/${selectedValue}?email=${user?.email}`;
        fetch(filterUrl)
            .then((res) => res.json())
            .then((data) => {
                if (selectedValue === 'low') {
                    data.sort((a, b) => a.price - b.price);
                } else if (selectedValue === 'high') {
                    data.sort((a, b) => b.price - a.price);
                }
                setMyToys(data);
            });

    }

    return (
        <div>
            <div><ToyBanner>My Added Toys</ToyBanner></div>

            {/* filter */}
            <div className="text-end mt-6">
                <select
                    className="select select-info max-w-xs"
                    value={selectedFilter}
                    onChange={handleFilter}
                >
                    <option disabled value="default">Default</option>
                    <option value="high">High - Low</option>
                    <option value="low">Low - High</option>
                </select>
            </div>


            {/* table */}
            <div className="overflow-x-auto mt-8 border border-blue-400 shadow-lg shadow-blue-600 md:mb-8">
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
                            ></MyToyRow>)
                        }
                        {/* row 2 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;