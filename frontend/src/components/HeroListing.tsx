import { Hero } from "../types/Hero";
import "./styles/HeroListing.css";
import HeroService from "../services/HeroService";
import { useState } from "react";
import Modal from "./core/Modal";
import EditHeroForm from "./EditHeroForm";



function HeroListing({hero, updateHero} : {hero: Hero, updateHero: (id: string, data: Hero) => void}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <div className="listingContainer">
            <img src={hero.avatar} alt="Hero"></img>
            <p>{hero.name}</p>
            <p>{hero.hero_project}</p>
            <p>{hero.notes}</p>
            <p>{hero.rating}</p>
            <button onClick={()=>setShowModal(true)}>Edit</button>
        </div>
        {showModal ? <Modal><EditHeroForm hero={hero} setShowModal={setShowModal} updateHero={updateHero}></EditHeroForm></Modal> : null}
        </>
    );
}

export default HeroListing;