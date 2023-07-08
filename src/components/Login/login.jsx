import "../../styles/css/Login/style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../store";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = store.getState().users;
    let foundUser = false;

    users.map((user) => {
      if (email === user.Email && password === user.Password) {
        localStorage.setItem('Id', user.id)
        localStorage.setItem('Email', user.Email);
        // localStorage.setItem('Pass', user.Password);
        localStorage.setItem('Name', user.Name);
        localStorage.setItem('Admin', user.admin);
        // localStorage.setItem('Likes', user.Likes);
        // localStorage.setItem('Cart', user.Cart);
        foundUser = true;
      }
    });

    if (!foundUser) {
      console.log("Email ou mot de passe incorrect");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="loginPage">
      <div className="log">
        <br />
        <h1>Login</h1>
        <form className="login_form" onSubmit={handleSubmit}>
          <div className="mail">
            <input
              type={"email"}
              placeholder="Adresse Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="pass">
            <input
              type={"password"}
              placeholder="Mot de Passe"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="submit_btn">
            Se Connecter
          </button>
        </form>
      </div>
    </div>
  );
}
