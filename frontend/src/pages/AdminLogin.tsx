import { useNavigate } from "react-router-dom";


function AdminLogin({setIsAdmin} : {setIsAdmin: (arg0: boolean) => void}) {
    const navigate = useNavigate();
    return (
        <div>
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>
            <button onClick={() => {setIsAdmin(true); navigate("/heroes")}}>Sign In</button>
        </div>
    );
}

export default AdminLogin;