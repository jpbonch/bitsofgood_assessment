import { Hero } from "../types/Hero";
import "./styles/HeroListing.css";
import { useState } from "react";
import Modal from "./core/Modal";
import EditHeroForm from "./EditHeroForm";
import { useNavigate } from "react-router-dom";

function HeroListing({hero, updateHero} : {hero: Hero, updateHero: (id: string, data: Hero) => void}) {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const incrementClickCount = () => {
        const heroPlusOne = hero;
        heroPlusOne.clicks++;
        updateHero(hero.id, heroPlusOne)
    }

    return (
        <>
        <div onClick={() => {incrementClickCount();  console.log(hero.clicks);navigate("/hero")}} className="listingContainer">
            <img src={hero.avatar} alt="Hero"></img>
            <p>{hero.name}</p>
            <p>{hero.hero_project}</p>
            <p>{hero.notes}</p>
            <p>{hero.rating}</p>
            <button onClick={(e)=>{e.preventDefault(); setShowModal(true)}}>Edit</button>
        </div>
        {showModal ? <Modal><EditHeroForm hero={hero} setShowModal={setShowModal} updateHero={updateHero}></EditHeroForm></Modal> : null}
        </>
    );
}

export default HeroListing;