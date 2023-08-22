import HeroService from "../services/HeroService";
import { useContext, useEffect, useState } from "react";
import { Hero } from "../types/Hero";
import HeroListing from "./HeroListing";
import Modal from "./core/Modal";
import AddHeroForm from "./AddHeroForm";
import useHeroes from "../hooks/useHeroes";


function HeroTable() {
    const {heroes, loading, addHero, updateHero} = useHeroes();
    const [showModal, setShowModal] = useState<boolean>(false);


    if (loading) {
        return (<div>Loading...</div>)
    }

    return (
        <>
        <div>
            {heroes.map((hero, idx) => <HeroListing key={idx} hero={hero} updateHero={updateHero}/>)}
        </div>
        <button onClick={()=>setShowModal(true)}>Add Hero</button>
        {showModal ? <Modal><AddHeroForm setShowModal={setShowModal} addHero={addHero}></AddHeroForm></Modal>: null}
        </>
    );
}

export default HeroTable;