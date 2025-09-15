import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      email: Username,
      password: Password
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login realizado com sucesso: ' + data.message);
      } else {
        alert('Erro no login: ' + data.message);
      }
    } catch (error) {
      console.error('Falha de conexão com o servidor:', error);
      alert('Não foi possível conectar ao servidor. Verifique se o backend está no ar.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

        <h1>Acesse o sistema</h1>
        <div>
          <input type="email" placeholder="Email"
            required
            onChange={(e) => setUsername(e.target.value)} />
          <FaUser className="icon" />
        </div>
        <div>
          <input type="password" placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)} />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre-se de mim.
          </label>
          <a href="">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registre-se</a>
          </p>
        </div>

      </form>
    </div>
  )
}

export default Login