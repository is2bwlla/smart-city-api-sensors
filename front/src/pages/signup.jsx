import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault(); //serve para impedir o carregamento da página

        try {
            console.log("Formulário submetido.");

            const tokenResponse = await axios.post("http://127.0.0.1:8000/api/token/", {
                username: 'isabella',
                password: 'lanadelrey'
            });
            console.log("Token recebido.");
            const token = tokenResponse.data.access;

            const response = await axios.post("http://127.0.0.1:8000/api/create_user/", {
                username: username,
                email: email,
                password: password
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });
            alert("Usuário cadastrado com sucesso!");

            setUsername("");
            setEmail("");
            setPassword("");
            setError("");
        
        } catch (error) {
            console.error("Erro:", error);

            if (error.response) {
                console.log("Erro de resposta:", error.response.data);
                setError("Error ao cadastrar usuário: " + JSON.stringify(error.response.data));
            } else {
                setError("Error ao cadastrar o usuário: " + error.message);
            }
        }  
    };

    return (
        <>
            <div className="login-card">
                <h1>Welcome</h1>

                <form onSubmit={handleSubmit}>
                    <div className="content">
                        <h3 className="infos">USER:</h3>
                        <input 
                            type="text" 
                            placeholder="Ex: Isabella"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <h3 className="infos">EMAIL:</h3>
                        <input 
                            type="text" 
                            placeholder="Ex: isabella@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <h3 className="infos">PASSWORD:</h3>
                        <input 
                            type="password" 
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type="submit" className="accept">SIGN UP</button>
                        {error && <p className="error">{error}</p>}
                    </div>
                </form>

                <div className="register">
                    <Link to="/">
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
