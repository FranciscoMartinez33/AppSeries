import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const PrivateRoutes = ({ children }) => {
    const { auth } = useContext(AuthContext);

    if (auth.isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/login" replace={true} />;
    }
};

export default PrivateRoutes;