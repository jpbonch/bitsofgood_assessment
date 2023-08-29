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
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", justifyItems: "center", alignItems: "center", padding: "10px"}}>
                

                <div className="metaContainer">
                    <p style={{fontSize: "1rem", margin: 0}}>{hero.name}</p>
                    <p><b>Project:</b> {hero.hero_project}</p>
                </div>

                <p>Notes: {hero.notes}</p>
                <div className="rating"><p>{hero.rating}</p><p style={{fontSize: "12px"}}>RATED</p>{isAdmin ? <button onClick={(e)=>{e.stopPropagation(); setShowModal(true)}}>Edit</button> : null}</div>
                
            </div>
            {showModal ? <Modal setShowModal={setShowModal}><EditHeroForm hero={hero} setShowModal={setShowModal} updateHero={updateHero}></EditHeroForm></Modal> : null}
        </div>
        
        </>
    );
}

export default HeroListing;