import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <p>Loading</p>
    }
    if(!user){
        return <Navigate to={'/auth/login'}
            state={{from:location}} replace/>
    }
    return children
    }

export default PrivateRoute;