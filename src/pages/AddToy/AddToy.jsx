
import ToyBanner from "../Shared/ToyBanner";



const AddToy = () => {





    return (
        <div>
            <ToyBanner>Add a Toy</ToyBanner>
            <div className="md:mt-8 w-2/3 mx-auto">
                <form >
                    <div className="p-8 rounded border border-blue-300">
                        <h1 className="font-medium text-3xl">Add a New Toy</h1>
                        <p className="text-gray-600 mt-6">This is the new toy adding section. Add as much toy as you want and sell it. Yee!</p>

                        <form>
                            <div className="mt-8 grid lg:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Seller Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Adress</label>
                                    <input type="text" name="email" id="email" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" />
                                </div>

                                <div>
                                    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Toy Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter toy name" />
                                </div>

                                <div>
                                    <label htmlFor="price" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>
                                    <input type="text" name="price" id="price" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Toy price" />
                                </div>
                                <div>
                                    <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Sub-category</label>
                                   
                                    <select id="rating" name="rating" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full">
                                        <option value="football">Football</option>
                                        <option value="basketball">Basketball</option>
                                        <option value="golf">Golf</option>
                                       
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="toyPhoto" className="text-sm text-gray-700 block mb-1 font-medium">Toy Picture URL</label>
                                    <input type="text" name="toyPhoto" id="toyPhoto" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Toy Picture URL" />
                                </div>

                                <div>
                                    <label htmlFor="rating" className="text-sm text-gray-700 block mb-1 font-medium">Rating</label>
                            
                                    <select id="rating" name="rating" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full">
                                        <option value="1">*</option>
                                        <option value="2">**</option>
                                        <option value="3">***</option>
                                        <option value="4">****</option>
                                        <option value="5">*****</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="quantity" className="text-sm text-gray-700 block mb-1 font-medium">Quantity</label>
                                    <input type="number" name="quantity" id="quantity" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="(01/01/1993)" />
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
                </form>
            </div>

        </div>
    );
};

export default AddToy;