import { Link } from "react-router-dom";
function Splash() {
    return (
        <>
        <p>splash page</p>
        <Link to="/heroes"><button>to heroes</button></Link>
        </>
    );
}

export default Splash;