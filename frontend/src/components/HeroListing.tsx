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
            <img src={hero.avatar} alt="Hero" className="heroImg"></img>
            <div>
            <p>{hero.name}</p>
            <div className="metaContainer">
            <p>Project: {hero.hero_project}</p>
            <p>Notes: {hero.notes}</p>
            </div>
            
            </div>
            <div className="rating">{hero.rating}</div>
            {isAdmin ? <button onClick={(e)=>{e.stopPropagation(); setShowModal(true)}}>Edit</button> : null}
            
        </div>
        {showModal ? <Modal setShowModal={setShowModal}><EditHeroForm hero={hero} setShowModal={setShowModal} updateHero={updateHero}></EditHeroForm></Modal> : null}
        </>
    );
}

export default HeroListing;