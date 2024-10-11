const Login = () => {
    return (
        <div className="login-card">
            <div className="content">
                <h2>LOGIN</h2>

                <h3 className="infos">Usuário:</h3>
                <input type="text" placeholder="Ex: Isabella"></input>

                <h3 className="infos">Email:</h3>
                <input type="text" placeholder="Ex: isabella@example.com"></input>

                <h3 className="infos">Senha:</h3>
                <input type="password"></input>

                <button className="accept">Entrar</button>
            </div>
        </div>
    )
}

export default Login;