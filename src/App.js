import React, { useRef, useState } from "react";
import AuthProvider from "./auth/AuthContext";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import AppRouter from "./routes/appRouter";



import './styles.css';


export default function App() {
 

  return (
    <>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
     </>
  );
};
