import HeroTable from "../components/HeroTable";
import "./styles/Main.css"
function Main({isAdmin}: {isAdmin: boolean}) {
    

    return (
        <div className="main">
            <h1 className="title">Heroes</h1>
            <div className="tableContainer">
            <HeroTable isAdmin={isAdmin} />
            </div>
        </div>
    );
}

export default Main;