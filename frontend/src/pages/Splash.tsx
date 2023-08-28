import { Link } from "react-router-dom";
import "./styles/Splash.css"
import Button from "../components/core/Button";
import ButtonAlternate from "../components/core/ButtonAlternate";
function Splash() {
    return (
        <div className="splash">
            <div className="splashContainer">
        <h1>HaHa Heroes</h1>
        <div className="buttonContainer">
        <Link to="/heroes"><Button text="See Heroes" /></Link>
        <Link to="/admin"><ButtonAlternate text="Admin Login" /></Link>
        </div>
        </div>
        </div>
    );
}

export default Splash;