import Header from "../components/header";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <Header/>
            
            <div className="login-card">
                <h1>Welcome Back</h1>
                <div className="content">

                    <h3 className="infos">USER:</h3>
                    <input type="text" placeholder="Ex: Isabella"/>

                    <h3 className="infos">PASSWORD:</h3>
                    <input type="password" placeholder="Enter your password"/>

                    <button className="accept">SIGN ON</button>
                    {/* <a href=""><p>Esqueceu a senha?</p></a> */}
                </div>

                <div className="register">
                    <Link to="/signUp">
                        <button className="registration">
                            SIGN UP
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login;