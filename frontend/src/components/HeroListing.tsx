import { Hero } from "../types/Hero";
import "./styles/HeroListing.css";
import { useState } from "react";
import Modal from "./core/Modal";
import EditHeroForm from "./EditHeroForm";
import { useNavigate } from "react-router-dom";

function HeroListing({hero, updateHero, isAdmin} : {hero: Hero, updateHero: (id: string, data: Hero) => void, isAdmin: boolean}) {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const incrementClickCount = () => {
        const heroPlusOne = hero;
        heroPlusOne.clicks++;
        updateHero(hero.id, heroPlusOne)
    } 

    return (
        <>
        <div onClick={(e) => {e.stopPropagation();incrementClickCount(); navigate(`/hero/${hero.id}`)}} className="listingContainer">
            <img src={hero.avatar} alt="Hero"></img>
            <p>{hero.name}</p>
            <p>{hero.hero_project}</p>
            <p>{hero.notes}</p>
            <p>{hero.rating}</p>
            {isAdmin ? <button onClick={(e)=>{e.stopPropagation(); setShowModal(true)}}>Edit</button> : null}
            
        </div>
        {showModal ? <Modal><EditHeroForm hero={hero} setShowModal={setShowModal} updateHero={updateHero}></EditHeroForm></Modal> : null}
        </>
    );
}

export default HeroListing;