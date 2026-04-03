import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "../Styles/Welcome.css"  

export const Welcome = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // const email = location.state.email;
    const [email,setEmail] = useState("");

    useEffect(()=>{
        const fetchUser = async ()=>{
            const token = localStorage.getItem("token");
              if (!token) {
                navigate("/");
                return;
            }

            try{
                const res = await fetch("https://react-node-auth-backend-1.onrender.com/protected",{
                     method:"GET",
                     headers:{
                        Authorization: token,
                     },
                })

                const data = await res.json();
                console.log("dataaaaaa",data);
                
                setEmail(data.user.email)
            }catch(err){
                console.log(err);
                
            }
        }
        fetchUser();
    },[])

    const handleLogout = ()=>{
         localStorage.removeItem("token");
         navigate("/");
    }
    
    return (
        <div>
            <div className="welcome-text">Welcome 🎉</div>
                <p style={{ fontSize: "20px" }}>
                    Hello, {email ? email : "User"} 👋
                </p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
