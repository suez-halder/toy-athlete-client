import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';


const Register = () => {

    const { createUser, googleSignIn, displayProfile, setLoading} = useContext(AuthContext)
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // console.log(name, email, password, photo);

        if (password.length <= 6) {
            setError("Password should be at least 6 characters");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                displayProfile(name, photo)
                // setUser({ ...user, ...displayProfile });
                setLoading(false);
                // console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                form.reset();
            })

        




    }

    const handleGoogle = () =>{

        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }





    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold text-center">Please Register</h1>
                        </div>
                        <form onSubmit={handleRegister}>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input  id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" />
                                        <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" required>Name</label>
                                    </div>
                                    <div className="relative">
                                        <input  id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" required>Email Address</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" required>Password</label>
                                    </div>
                                    <div className="relative">
                                        <input  id="photo" name="photo" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Photo URL" />
                                        <label htmlFor="photo" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" required>Photo URL</label>
                                    </div>

                                    <div className='text-error'>
                                        <p><small>{error}</small></p>
                                    </div>


                                    <div className="relative text-center">
                                        <button className="bg-[#4CB7CF] hover:bg-info text-white rounded-md px-12 py-1 mb-4">Register</button>
                                        <p><small>Already have an account? <span className="text-indigo-500"><Link to='/login'>Login</Link></span></small></p>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="divider relative"><small>or sign-up using</small>
                        </div>
                        <div onClick={handleGoogle} className="relative text-center">
                            <button className="btn bg-blue-500 hover:bg-info border-none md:w-1/2 h-4 rounded-full text-lg"><FaGoogle></FaGoogle></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;