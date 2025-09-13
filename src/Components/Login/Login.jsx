import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDeFault();

    alert("Enviando dados:" + Username + " - " + Password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

        <h1>Acesse o sistema </h1>
        <div className="input-field">
          <input type="email" placeholder="Email"
            required
            onChange={(e) => setUsername(e.target.value)} />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
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
