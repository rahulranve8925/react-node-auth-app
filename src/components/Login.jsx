import React, { useState } from 'react'
import "../Styles/Login.css"
import { useNavigate } from 'react-router-dom';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(("http://localhost:5000/login"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    email,
                    password
                }),
            })

            const data = await res.json();
            if (!res.ok) {
                alert(data.message);
                return;
            }
             localStorage.setItem("token", data.token);
            alert(data.message)
        } catch (error) {
            console.log(error);
            alert("Server Error");
        }



        setError("");
        if (!email || !password) {
            setError("All fields are required");
            return;
        }
        // Password length
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        navigate("/welcome", { state: { email: email } })
    }

    return (
        <div>
            <div className="container">
                <div className="login-box">
                    <h2>Login Hii..!!</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Login</button>
                        {error && <p className="error">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;