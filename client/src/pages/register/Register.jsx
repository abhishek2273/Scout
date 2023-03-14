import React, { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";

const Register = () => {
    const imgs = "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=1060&t=st=1678175365~exp=1678175965~hmac=a5fa4aec2184e0c483a3a96a50150d733dcae75815fd41a40bef7f76d503be19"

    const [file, setFile] = useState(null);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        img: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = await upload(file);
        try {
            await newRequest.post('/register', {
                ...user,
                img: url,
            });
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="register">
            <div className="container">
                <div className="left">
                    <img src={imgs} alt="" />
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <h1>Create a new Account</h1>
                        <p>Required filed <i>*</i> fill in Compulsary</p>
                        <label htmlFor="">Username <i>*</i></label>
                        <input
                            name="username"
                            type="text"
                            placeholder="John123"
                            required
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email <i>*</i></label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            required
                            onChange={handleChange}
                        />
                        <label htmlFor="Password">Password <i>*</i></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="johnkane@123"
                            required
                            onChange={handleChange}
                        />
                        <label htmlFor="">Profile Picture</label>
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                        <div className="btn">
                            <button type="submit">Register</button>
                        </div>
                        {/* {error && error} */}
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register;