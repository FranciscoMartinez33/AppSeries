import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import Home from "../pages/Home";

import Login from "../views/Login/Login";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ <PublicRoutes>
                    <Login/>
                </PublicRoutes>
                }
                />
                <Route
                    path="*"
                    element={
                        <PrivateRoutes>
                            <Routes>
                                <Route path="/home" element={ 
                                <Layout>
                                    <Home />
                                </Layout>    
                                } />
                               
                            </Routes>
                        </PrivateRoutes>
                    }
                />   
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;