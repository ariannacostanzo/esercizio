/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const ProtectedRoute = ({children}) => {

    const {isLoggedIn} = useAuth();

    //se l'utente non è loggato reinderizzo su login
    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }

     return <>{children}</>;
}

export default ProtectedRoute;