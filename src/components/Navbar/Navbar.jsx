import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { auth, authDispatch } = useContext(AuthContext);
  const [scroll, setScroll] = useState(false);

  const logout = () => {
    authDispatch({
      type: "LOGOUT"
    })
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else setScroll(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />

      <div className="nav_menu">
        <a className="nav_item" href="#">
          Inicio
        </a>

        <a className="nav_item" href="#">
          Series
        </a>

        <a className="nav_item" href="#">
          Peliculas
        </a>

        <a className="nav_item" href="#">
          Novedades populares
        </a>

        <a className="nav_item" href="#">
          Mi lista
        </a>
      </div>

      <img
        className="user"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="user"
      />
      <button onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Navbar;