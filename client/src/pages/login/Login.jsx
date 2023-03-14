import React, { useState } from "react";
import "./Login.scss";
// import newRequest from "../../utils/newRequest";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/login", { username, password })
            // const res = await newRequest.post("/login", {username,password});
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            navigate("/");

        } catch (err) {
            console.log(err);
        }
    }

   

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <label htmlFor="">Username</label>
                <input
                    name="username"
                    type="text"
                    placeholder="username"
                    onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor="Password">Password</label>
                <input
                    name="password"
                    type="password"
                    // id="password"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {/* {error && error} */}
            </form>
        </div>
    )
}
export default Login;