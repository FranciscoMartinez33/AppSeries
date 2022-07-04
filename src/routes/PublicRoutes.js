import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext"



const PublicRoute = ({ children }) => {
    const { auth } = useContext(AuthContext);

    if (auth.isAuthenticated) {
        return <Navigate to ="/home" />;
    } else {
        return children;
    }
};

export default PublicRoute;