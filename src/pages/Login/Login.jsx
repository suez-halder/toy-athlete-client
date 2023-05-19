import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { updateDocumentTitle } from "../../utils/FunctionTitle";

const Login = () => {
    updateDocumentTitle("Toy Athlete | Login")
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user
                // console.log(user);
                toast.success('Logged In Successfully',{
                                 
                    duration: 1000,
                    position: 'top-center',
            })
                navigate(from, { replace: true })
            })

            .catch(error => {
                setError("Please enter a valid password");
                form.reset()
               
                // console.log(error);
            })

    }

    const handleGoogle = () => {

        googleSignIn()
            .then(result => {
                const user = result.user
                // console.log(user);
                toast.success('Logged In Successfully',{
                                 
                    duration: 1000,
                    position: 'top-center',
            })
                navigate(from, { replace: true })
                
            })
            .catch(error => {
                setError(error.message);
                
                // console.log(error);
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
                            <h1 className="text-2xl font-semibold">Please Login</h1>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input  id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" required/>
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" required/>
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    </div>
                                    {error && (
                                        <div className='text-error'>
                                            <p><small>{error}</small></p>
                                        </div>
                                    )}


                                    <div className="relative text-center">
                                        <button className="bg-[#4CB7CF] hover:bg-info text-white rounded-md px-12 py-1 mb-4">Login</button>
                                        <p><small>New to Toy Athlete? <span className="text-indigo-500"><Link to='/register'>Register</Link></span></small></p>
                                    </div>

                                </div>
                            </div>
                        </form>

                        <div className="divider relative"><small>or sign-in using</small>
                        </div>
                        <div onClick={handleGoogle} className="relative text-center">
                            <button className="btn bg-blue-500 hover:bg-info border-none md:w-1/2 h-4 text-lg rounded-full"><FaGoogle></FaGoogle></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;