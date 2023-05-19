import Lottie from "lottie-react";
import review from './../../../assets/review.json'

// happyFace - https://i.ibb.co/qkvPDd0/happy-Face.png

const Reviews = () => {
    return (
        <div>

            <h2 className="text-2xl md:text-5xl font-bold text-center my-4 md:mt-16 rounded-md">Clients Review</h2>
            <p className="text-sm text-slate-500 md:text-base font-medium text-center w-1/2 mx-auto">What clients says about us? Take a look</p>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="w-1/2 md:w-full mx-auto">
                    <Lottie animationData={review} />
                </div>
                <div className="w-full">
                    <div className="flex flex-col lg:flex-col">
                        <img src="https://i.ibb.co/qkvPDd0/happy-Face.png" className="w-1/4 mx-auto rounded-full shadow-2xl" />

                        <div className="text-center">
                            <p className="py-6 text-sm text-slate-500 md:text-base">Toy Athlete is one of the most exclusive Sports Toy shop in the wold, where you can find all product for your baby that your want to buy for your baby. I recommend this shop all of you</p>
                            <h1 className="text-2xl font-bold">Alan Smith</h1>
                            <p><small className=" text-slate-500">- CEO, Momens Group</small></p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviews;