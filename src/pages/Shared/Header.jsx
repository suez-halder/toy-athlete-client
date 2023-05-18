import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);





    return (

        <div className="navbar bg-[#94C7EA] rounded-md text-[#545454]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn bg-[#4CB7CF] lg:hidden border-none mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-100 rounded-box w-28">
                        <li className="hover:bg-info rounded-md md:tracking-wider"><Link to='/'>Home</Link></li>
                        <li className="hover:bg-info rounded-md md:tracking-wider"><Link to='/allToys'>All  Toys</Link></li>
                        <li className="hover:bg-info rounded-md md:tracking-wider"><Link to='/myToys'>My Toys</Link></li>
                        <li className="hover:bg-info rounded-md md:tracking-wider"><Link to='/addToy'>Add Toy</Link></li>

                    </ul>
                </div>
                <Link to='/'><img className="h-10 md:h-14 rounded-md" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 lg:flex gap-4 text-lg">
                    <li className="hover:bg-info rounded-md md:tracking-wider"><Link to='/'>Home</Link></li>
                    <li className="hover:bg-info rounded-md md:tracking-wider"><Link to='/blogs'>Blogs</Link></li>
                    <li className="hover:bg-info rounded-md md:tracking-wider"><Link to='/allToys'>All  Toys</Link></li>
                    {
                        user &&
                        <>
                            <li className="hover:bg-info rounded-md md:tracking-wider"><Link to='/myToys'>My Toys</Link></li>
                            <li className="hover:bg-info rounded-md md:tracking-wider"><Link to='/addToy'>Add Toy</Link></li>
                        </>
                    }

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.photoURL && <img className="rounded-full h-10 mr-2" src={user.photoURL} alt="" title={user.displayName}/>
                }
                {
                    user ? <Link to='login'><button onClick={logOut} className="btn bg-[#4CB7CF] hover:bg-info border-none px-8 md:px-12 md:tracking-widest">Log Out</button></Link> : <Link to='login'><button className="btn bg-[#4CB7CF] hover:bg-info border-none px-8 md:px-12 md:tracking-widest">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;