import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (!username || !password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            console.log("Formulário de login bem sucedido.");

            const tokenResponse = await axios.post("http://127.0.0.1:8000/api/token/", {
                username: username,
                password: password
            });
            console.log("Token recebido.");
            const token = tokenResponse.data.access;

            const response = await axios.post("http://127.0.0.1:8000/api/login/", {
                username: username,
                password: password
            });

            if (response.data.success) {
                console.log("Login bem sucedido:", response.data);
                alert("Login bem sucedido.");
                navigate("/home");
            } else {
                alert("User not found. Do you register.")
            }
            

        } catch (err) {
            console.error("Erro ao fazer login:", err);

            if (err.response) {
                // Registra a resposta do servidor para verificar o que está errado
                console.log("Erro de resposta:", err.response.data);
                alert("Erro ao fazer login: " + (err.response.data.detail || "Erro desconhecido."));
            } else if (err.request) {
                console.error("Erro ao fazer requisição:", err.request);
                alert("Erro ao conectar ao servidor. Tente novamente.");
            } else {
                alert("Erro ao fazer login: " + (err.message || "Erro desconhecido."));
            }
        }
    };

    return (
        <>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"/>
            </head>

            <div className="login-card">
                <h1>Login on SENAI Sensors</h1>

                <form onSubmit={handleSubmit}>
                    <div className="content">
                        <h3 className="infos">USER:</h3>
                        <input 
                            type="text" 
                            placeholder="Ex: Isabella"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <h3 className="infos">PASSWORD:</h3>
                        <input 
                            type="password" 
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    
                        <button type="submit" className="accept">SIGN ON</button>
                        {error && <p className="error">{error}</p>}
                        {/* <a href=""><p>Esqueceu a senha?</p></a> */}
                    </div>
                </form>

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