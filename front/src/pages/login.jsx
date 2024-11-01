import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        localStorage.removeItem("token");
    }, []);

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

            const token = tokenResponse.data.access; 
            localStorage.setItem("token", token); 
            console.log("Token recebido: ", token);

            alert("Login bem sucedido.");

            const from = location.state?.from || "/";
            navigate(from);

        } catch (err) {
            console.error("Erro ao fazer login:", err);
            setError("Erro ao fazer login. Verifique suas credenciais.");
        }
    };

    return (
        <div className="flex justify-center items-center mt-[250px] h-auto flex-col font-poppins">
            <h1 className="text-2xl font-semibold mb-3">Login on SENAI Sensors</h1>

            <form onSubmit={handleSubmit}>
                <div className="bg-[#6B8F71] p-5 text-[#fff] flex flex-col rounded-xl font-poppins">
                    <h3 className="text-base mb-2 font-poppins">USER:</h3>
                    <input 
                        className="outline-none border-[#fff] rounded-sm mb-3 w-[300px] h-8 font-poppins p-2 text-[#000]"
                        type="text" 
                        placeholder="Ex: Isabella"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <h3 className="text-base mb-2 font-poppins">PASSWORD:</h3>
                    <input 
                        className="outline-none border-[#fff] rounded-sm mb-3 w-[300px] h-8 font-poppins p-2 text-[#000]"
                        type="password" 
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" className="outline-none bg-transparent text-[#fff] border-[2px] border-[#fff] w-[100px] h-8 text-base font-poppins">SIGN ON</button>
                    {error && <p className="ml-20 mt-3 text-[#D9FFF5] text-base w-[150px] font-poppins">{error}</p>}
                </div>
            </form>

            <div className="mt-4">
                <Link to="/signUp">
                    <button className="outline-none bg-[#6B8F71] border-[2px] border-[#6B8F71] w-[150px] h-8 text-base font-semibold text-[#fff]">
                        SIGN UP
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
