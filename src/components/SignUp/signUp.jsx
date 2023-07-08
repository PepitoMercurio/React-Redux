import '../../styles/css/SignUp/style.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { ADD_USER_ACTION } from '../../store/userReducer';
import store from '../../store';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddUser = () => {
        const users = store.getState().users;
        let foundUser = false;

        users.map((user) => {
            if (email === user.Email || email === "" || password === "" || name === "") {
                console.log("pas ok");
                foundUser = true;
            }
        });

        if (!foundUser) {
            dispatch({ type: ADD_USER_ACTION, payload: { Name: name, Email: email, Password: password }});
            navigate('/');
        }
    }

    return (
        <div className='registerPage'>
            <div className="reg">
                <br />
                <h1>Register</h1>
                <form className="register_form">
                    <div className="name">
                        <input type={"text"} placeholder="Nom" value={name} onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="mail">
                        <input type={"email"} placeholder="Adresse Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="pass">
                        <input type={"password"} placeholder="Mot de Passe" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <button type="submit" className="submit_btn" onClick={handleAddUser}>Se Connecter</button>
                </form>
            </div>
        </div>
    )
}