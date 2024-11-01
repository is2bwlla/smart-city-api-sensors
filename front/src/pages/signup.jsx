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
            <div className="flex justify-center items-center mt-[250px] h-auto flex-col font-poppins">
                <h1 className="text-2xl font-semibold mb-3">Welcome</h1>

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

                        <h3 className="text-base mb-2 font-poppins">EMAIL:</h3>
                        <input 
                            className="outline-none border-[#fff] rounded-sm mb-3 w-[300px] h-8 font-poppins p-2 text-[#000]"
                            type="text" 
                            placeholder="Ex: isabella@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <h3 className="text-base mb-2 font-poppins">PASSWORD:</h3>
                        <input 
                            className="outline-none border-[#fff] rounded-sm mb-3 w-[300px] h-8 font-poppins p-2 text-[#000]"
                            type="password" 
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Link to="/login"><button type="submit" className="outline-none bg-transparent text-[#fff] border-[2px] border-[#fff] w-[100px] h-8 text-base font-poppins">SIGN UP</button></Link>
                        {error && <p className="ml-20 mt-3 text-[#D9FFF5] text-base w-[150px] font-poppins">{error}</p>}
                    </div>
                </form>

                <div className="mt-4">
                    <Link to="/login">
                        <button className="outline-none bg-[#6B8F71] border-[2px] border-[#6B8F71] w-[150px] h-8 text-base font-semibold text-[#fff]">
                            SIGN ON
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SignUp;
