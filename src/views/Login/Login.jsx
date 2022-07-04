import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import useForm from "../../hooks/useForm";


const Login = () => {
    const { authDispatch } = useContext(AuthContext);
    const navigate = useNavigate;
    const [form, handleChange] = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        authDispatch({ type: "LOGIN", payload: " Bienvenido" });
        navigate("/home", {
            replace: true,
        });

    };

    return (
        <>
            <h1 color= "white">LOGIN</h1>
            <form>
                <input
                    type="text"
                    value={form.email}
                    onChange={handleChange}
                    name="email"
                />
                <input
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    name="password"
                />
                <button onClick={handleSubmit}>Login</button>        
            </form>
        </>
    );
};

export default Login