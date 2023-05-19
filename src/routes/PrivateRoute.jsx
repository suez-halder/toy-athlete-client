
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return (
            <div className='text-center'>
                {/* <progress className="progress w-56 "></progress> */}
                <Lottie className='w-1/2 mx-auto' animationData={loadingAnimation} />;
            </div>
        )

    }

    if (user?.email) {
        return children;
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;