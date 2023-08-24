import HeroTable from "../components/HeroTable";
function Main({isAdmin}: {isAdmin: boolean}) {
    

    return (
        <div>
            <HeroTable isAdmin={isAdmin} />
        </div>
    );
}

export default Main;