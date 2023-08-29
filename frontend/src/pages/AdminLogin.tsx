import { useNavigate } from "react-router-dom";
import "./styles/Admin.css"
import Button from "../components/core/Button";


function AdminLogin({setIsAdmin} : {setIsAdmin: (arg0: boolean) => void}) {
    const navigate = useNavigate();
    return (
        <div className="admin">
            <h2>Admin Login</h2>
            <input className="authInput" type="text" placeholder="Username"/>
            <input className="authInput" type="text" placeholder="Password"/>
            <button className="authButton" onClick={() => {setIsAdmin(true); navigate("/heroes")}}>Sign In</button>
        </div>
    );
}

export default AdminLogin;