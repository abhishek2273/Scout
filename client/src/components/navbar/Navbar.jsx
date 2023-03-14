import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import newRequest from "../../utils/newRequest";
import axios from "axios";
import "./Navbar.scss";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // const currentUser = {
    //     id: 1,
    //     username: "aalu",
    //     // isRegister: true
    // }
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/logout");
            // await newRequest.post("/logout")
            localStorage.setItem("currentUser", null);
            navigate("/");
        } catch (error) {
            // console.log(error);
        }
    };

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                        <span className="text">PG SCOUT</span>
                    </Link>
                </div>

                <div className="links">
                    {currentUser ? (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src={currentUser.img || "/img/profile.png"} alt="" className="user_img" />
                            <span>{currentUser?.username}</span>
                            {open && (
                                <div className="options">
                                    <Link className="link" to="/">Home</Link>
                                    <Link className="link" onClick={handleLogout}>Logout</Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <button>
                                <Link to="/login" className="link">Login</Link>
                            </button>
                            <button>
                                <Link to="/register" className="link">Register</Link>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
