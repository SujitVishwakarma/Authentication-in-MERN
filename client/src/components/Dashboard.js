import React, { useContext, useState } from 'react'
import Header from './Header'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from './contextProvider/Context'

const Dashboard = () => {
    

    const { logindata, setLoginData } = useContext(LoginContext);
    // console.log(logindata.ValidUserOne.email);

    const history = useNavigate()

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        const data = await res.json();
        // console.log(data);
        if (data.status == 401 || !data) {
            // console.log("Error page redirect");
            history("*")
        } else {
            console.log("user verified");
            setLoginData(data);
            history("/dash")
        }
    }
    useEffect(() => {
        DashboardValid();
        
    }, []);
    // for posts

 

    

    return (
        <>
            <Header />
            <div style={{display:"flex", alignItems:"center",justifyContent:"center",marginTop:"50px", fontSize: "32px",
                fontWeight: "bolder"}}>
                Sucessfully u have logedin
            </div>
            
        </>
    )
}

export default Dashboard
