import React from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <Header/>

            <div className="login-card">
                <h1>Welcome</h1>

                <div className="content">
                    <h3 className="infos">USER:</h3>
                    <input type="text" placeholder="Ex: Isabella"/>

                    <h3 className="infos">EMAIL:</h3>
                    <input type="text" placeholder="Ex: isabella@example.com"/>

                    <h3 className="infos">PASSWORD:</h3>
                    <input type="password" placeholder="Enter your password"/>

                    <button className="accept">SIGN UP</button>
                </div>

                <div className="register">
                    <Link to="/login">
                        <button className="registration">
                            SIGN ON
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SignUp;
