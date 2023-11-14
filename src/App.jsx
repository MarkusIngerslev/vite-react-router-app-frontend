// import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDataPage from "./pages/UserDataPage";
import NewUserPage from "./pages/NewUserPage";
import Nav from "./components/Nav";
import "./App.css";

export default function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users" element={<UserDataPage />} />
                <Route path="/newuser" element={<NewUserPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </>
    );
}
