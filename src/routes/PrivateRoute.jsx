import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className='loading loading-spinner text-primary'/>
    }

    if(user){
        return children;
    }

    return (
        <Navigate to="/signin" />
    );
};

export default PrivateRoute;