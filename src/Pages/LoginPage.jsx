import React from "react";
import LoginForm from "../Component/LoginForm";


function LoginPage() {
    return (
        <>
        
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
               <img src="https://toppng.com/uploads/preview/tata-vector-logo-download-free-11574033407adrepfoeun.png"alt="Tata Steel" style={{ maxWidth: "10%", maxHeight: "10%" }} />


            </div>
            
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1>TiTle</h1>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "65vh",
                }}
            >
                <LoginForm />
            </div>
        </>
    );
}

export default LoginPage;
