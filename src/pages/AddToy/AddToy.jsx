import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyBanner from "../Shared/ToyBanner";
import Swal from 'sweetalert2'
import { updateDocumentTitle } from "../../utils/FunctionTitle";

/*
1. baseball -  
baseball- https://i.ibb.co/JmWLzX4/baseball.png 
gloves- https://i.ibb.co/6nxDWMV/gloves.png
helmet- https://i.ibb.co/bLxh1DN/helmet.png
softball- https://i.ibb.co/RYt2vq0/softball.png


2. football - 
football- https://i.ibb.co/Dp7sQjd/football.png
card- https://i.ibb.co/LQSMDT5/card.png
field- https://i.ibb.co/cw22B6D/field.png
medal- https://i.ibb.co/khztjYn/medel.png
whistle- https://i.ibb.co/vj5kKWk/whistle.png



3. tennis- 
pingPong set- https://i.ibb.co/SvbfJqD/pingPong.png
net- https://i.ibb.co/BtHPLbR/net.png
cover- https://i.ibb.co/nc2CrP1/cover.png
bat- https://i.ibb.co/P1Tv45S/bat.png
pongBalls- https://i.ibb.co/pwfqHzy/pong-Balls.png
table- https://i.ibb.co/gM8xKwm/table.png


4. Users -
https://i.ibb.co/5x8tq8x/chef-1.webp
https://i.ibb.co/MMVWRd4/chef-2.jpg
https://i.ibb.co/4SstyWp/chef-3.jpg
https://i.ibb.co/pn7DTpt/chef-4.webp
https://i.ibb.co/fvth1Yr/chef-5.jpg
 */


const AddToy = () => {
    updateDocumentTitle("Toy Athlete | Add Toy")
    const { user } = useContext(AuthContext);


    const handleAddToy = event => {
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
        const newToy = { name, email, toyName, price, subCategory, toyPhoto, rating, quantity, description };
        // console.log(newToy);

        fetch('https://toy-athlete-server.vercel.app/addtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'New Toy Added',
                        confirmButtonText: 'Add More!'
                    })
                }
                form.reset();
            })





    }



    return (
        <div>
            <ToyBanner>Add a Toy</ToyBanner>
            <div className="md:mt-8 w-2/3 mx-auto">
                <div >
                    <div className="p-8 rounded border border-blue-300 shadow-lg shadow-blue-600 md:mb-8">
                        <h1 className="font-medium text-3xl">Add a New Toy</h1>
                        <p className="text-gray-600 mt-6">This is the new toy adding section. Add as much toy as you want and sell it. Yee!</p>

                        <form onSubmit={handleAddToy}>
                            <div className="mt-8 grid lg:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Seller Name</label>
                                    <input type="text" name="name" defaultValue={user.displayName} id="name" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" required />
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Address</label>
                                    <input type="email" name="email" defaultValue={user.email} id="email" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="email@email.com" required />
                                </div>

                                <div>
                                    <label htmlFor="toyName" className="text-sm text-gray-700 block mb-1 font-medium">Toy Name</label>
                                    <input type="text" name="toyName" id="toyName" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter toy name" required />
                                </div>

                                <div>
                                    <label htmlFor="price" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>
                                    <input type="text" name="price" id="price" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Price" required />
                                </div>
                                <div>
                                    <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Sub-category</label>

                                    <select id="subCategory" name="subCategory" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" required>
                                        <option value="baseball">Baseball</option>
                                        <option value="football">Football</option>
                                        <option value="tennis">Table Tennis</option>

                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="toyPhoto" className="text-sm text-gray-700 block mb-1 font-medium">Toy Picture URL</label>
                                    <input type="text" name="toyPhoto" id="toyPhoto" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Toy Picture URL" required />
                                </div>

                                <div>
                                    <label htmlFor="rating" className="text-sm text-gray-700 block mb-1 font-medium">Rating</label>

                                    <select id="rating" name="rating" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="*" required>
                                        <option value="5">*****</option>
                                        <option value="4">****</option>
                                        <option value="3">***</option>
                                        <option value="2">**</option>
                                        <option value="1">*</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="quantity" className="text-sm text-gray-700 block mb-1 font-medium">Quantity</label>
                                    <input type="number" min={0} name="quantity" id="quantity" className="bg-gray-100 border border-gray-300 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Quantity" required />
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