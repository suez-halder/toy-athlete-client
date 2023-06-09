
import { useLoaderData, useNavigate } from "react-router-dom";
import ToyBanner from "../Shared/ToyBanner";
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { updateDocumentTitle } from "../../utils/FunctionTitle";


const EditMyToy = () => {
    updateDocumentTitle("Toy Athlete | Update Toy")

    const editToy = useLoaderData()
    const { _id, name, email, toyName, price, subCategory, toyPhoto, rating, quantity, description } = editToy;

    const navigate = useNavigate()

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const price = form.price.value;
        const subCategory = form.subCategory.value;
        const toyPhoto = form.toyPhoto.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        // console.log(name, email, toyName, price, subCategory, toyPhoto, rating, quantity, description);
        const updateToy = { name, email, toyName, price, subCategory, toyPhoto, rating, quantity, description };
        // console.log(newToy);

        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to update this toy!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Update Now!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://toy-athlete-server.vercel.app/editToy/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updateToy)
                })

                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.modifiedCount > 0) {
                            toast.success('Toy Updated Successfully', {
                                duration: 2000,
                                position: 'top-center',
                            })
                            navigate('/myToys')

                        }
                    })


             

            }
        })


    }




    return (
        <div>
            <ToyBanner>Update Toy Details</ToyBanner>
            <div className="md:mt-8 w-2/3 mx-auto">
                <div >
                    <div className="p-8 rounded border border-blue-300 shadow-lg shadow-blue-600 md:mb-8">
                        <h1 className="font-medium text-3xl">Update Your Toy</h1>
                        <p className="text-gray-600 mt-6">Update price, quantity, and description of your toy.</p>

                        <form onSubmit={handleUpdateToy}>
                            <div className="mt-8 grid lg:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Seller Name</label>
                                    <input type="text" name="name" defaultValue={name} id="name" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" required />
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Address</label>
                                    <input type="email" name="email" defaultValue={email} id="email" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="email@email.com" required />
                                </div>

                                <div>
                                    <label htmlFor="toyName" className="text-sm text-gray-700 block mb-1 font-medium">Toy Name</label>
                                    <input type="text" name="toyName" defaultValue={toyName} id="toyName" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter toy name" required />
                                </div>

                                <div>
                                    <label htmlFor="price" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>
                                    <input type="text" name="price" id="price" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder={price} required />
                                </div>
                                <div>
                                    <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Sub-category</label>

                                    <select id="subCategory" name="subCategory" defaultValue={subCategory} className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" required>
                                        <option value="football">Football</option>
                                        <option value="basketball">Baseball</option>
                                        <option value="tennis">Table Tennis</option>

                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="toyPhoto" className="text-sm text-gray-700 block mb-1 font-medium">Toy Picture URL</label>
                                    <input type="text" name="toyPhoto" defaultValue={toyPhoto} id="toyPhoto" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Toy Picture URL" required />
                                </div>

                                <div>
                                    <label htmlFor="rating" className="text-sm text-gray-700 block mb-1 font-medium">Rating</label>

                                    <select id="rating" name="rating" defaultValue={rating} className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" required>
                                        <option value="5">*****</option>
                                        <option value="4">****</option>
                                        <option value="3">***</option>
                                        <option value="2">**</option>
                                        <option value="1">*</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="quantity" className="text-sm text-gray-700 block mb-1 font-medium">Quantity</label>
                                    <input type="number" min={0} name="quantity" id="quantity" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder={quantity} required />
                                </div>
                                <div>
                                    <label htmlFor="description" className="text-sm text-gray-700 block mb-1 font-medium">Toy Description</label>
                                    <textarea type="text" name="description" defaultValue={description} id="description" className=" textarea textarea-bordered bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder={description} />
                                </div>




                            </div>

                            <div className="space-x-4 mt-8">
                                <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EditMyToy;