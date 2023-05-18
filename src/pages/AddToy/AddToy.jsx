
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyBanner from "../Shared/ToyBanner";



const AddToy = () => {
    const {user} = useContext(AuthContext);


    const handleAddToy = event =>{
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
     
        console.log(name, email, toyName, price, subCategory, toyPhoto, rating, quantity, description);
    }



    return (
        <div>
            <ToyBanner>Add a Toy</ToyBanner>
            <div className="md:mt-8 w-2/3 mx-auto">
                <div >
                    <div className="p-8 rounded border border-blue-300">
                        <h1 className="font-medium text-3xl">Add a New Toy</h1>
                        <p className="text-gray-600 mt-6">This is the new toy adding section. Add as much toy as you want and sell it. Yee!</p>

                        <form onSubmit={handleAddToy}>
                            <div className="mt-8 grid lg:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Seller Name</label>
                                    <input type="text" name="name" defaultValue={user.displayName} id="name" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Address</label>
                                    <input type="text" name="email" defaultValue={user.email} id="email" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="email@email.com" />
                                </div>

                                <div>
                                    <label htmlFor="toyName" className="text-sm text-gray-700 block mb-1 font-medium">Toy Name</label>
                                    <input type="text" name="toyName" id="toyName" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter toy name" />
                                </div>

                                <div>
                                    <label htmlFor="price" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>
                                    <input type="text" name="price" id="price" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Price" />
                                </div>
                                <div>
                                    <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Sub-category</label>
                                   
                                    <select id="subCategory" name="subCategory" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full">
                                        <option value="football">Football</option>
                                        <option value="basketball">Baseball</option>
                                        <option value="tennis">Table Tennis</option>
                                       
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="toyPhoto" className="text-sm text-gray-700 block mb-1 font-medium">Toy Picture URL</label>
                                    <input type="text" name="toyPhoto" id="toyPhoto" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Toy Picture URL" />
                                </div>

                                <div>
                                    <label htmlFor="rating" className="text-sm text-gray-700 block mb-1 font-medium">Rating</label>
                            
                                    <select id="rating" name="rating" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="*">
                                        <option value="1">*</option>
                                        <option value="2">**</option>
                                        <option value="3">***</option>
                                        <option value="4">****</option>
                                        <option value="5">*****</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="quantity" className="text-sm text-gray-700 block mb-1 font-medium">Quantity</label>
                                    <input type="number" name="quantity" id="quantity" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Quantity" />
                                </div>
                                <div>
                                    <label htmlFor="description" className="text-sm text-gray-700 block mb-1 font-medium">Toy Description</label>
                                    <textarea type="text" name="description" id="description" className=" textarea textarea-bordered bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Toy Description" />
                                </div>




                            </div>

                            <div className="space-x-4 mt-8">
                                <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddToy;