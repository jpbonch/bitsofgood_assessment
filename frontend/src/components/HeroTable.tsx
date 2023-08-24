import { useState } from "react";
import HeroListing from "./HeroListing";
import Modal from "./core/Modal";
import AddHeroForm from "./AddHeroForm";
import useHeroes from "../hooks/useHeroes";
import PageControls from "./core/PageControls";


function HeroTable({isAdmin}: {isAdmin: boolean}) {
    const {heroes, loading, addHero, updateHero} = useHeroes();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const HEROES_PER_PAGE = 10;
    
    const lastHeroIndex = currentPage * HEROES_PER_PAGE
    const firstHeroIndex = lastHeroIndex - HEROES_PER_PAGE;
    const heroesToDisplay = heroes.slice(firstHeroIndex, lastHeroIndex);



    if (loading) {
        return (<div>Loading...</div>)
    }

    return (
        <>
        <div>
            {heroesToDisplay.map((hero, idx) => <HeroListing isAdmin={isAdmin} key={idx} hero={hero} updateHero={updateHero}/>)}
        </div>
        <button onClick={()=>setShowModal(true)}>Add Hero</button>
        <PageControls itemsPerPage={HEROES_PER_PAGE} totalItems={heroes.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        {showModal ? <Modal><AddHeroForm setShowModal={setShowModal} addHero={addHero}></AddHeroForm></Modal>: null}
        </>
    );
}

export default HeroTable;