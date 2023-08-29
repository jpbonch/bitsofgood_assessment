import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/core/Modal";
import EditHeroForm from "../components/EditHeroForm";
import { useParams } from "react-router-dom";
import useHeroes from "../hooks/useHeroes";
import { Hero } from "../types/Hero";
import "./styles/HeroInfo.css"

export default function HeroInfo({isAdmin} : {isAdmin: boolean}) {
    const {id} = useParams();
    const {getHero, updateHero} = useHeroes();
    const [hero, setHero] = useState<Hero>();
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    
    

    useEffect(()=> {
        if (!id) {
            setError("Hero not found.");
            return;
        }
        (async () => {
            const result = await getHero(id);
            if (result.status === 200) {
                setHero(result.data)
                return;
            }
            setError("Hero not found.")

        })();
    }, [id, getHero])

    
    if (!hero) {
        return <p>Loading</p>
    }

    if (error) {
        return <p>{error}</p>
    } 

 
    return (<div style={{display: "flex", alignItems: "center", justifyContent: "center",marginTop: "100px"}}>
        <button style={{position: "fixed", top: "10px", left: "10px"}} onClick={()=> navigate("/heroes")}>Back</button>
        
        {showModal ? <Modal setShowModal={setShowModal}><EditHeroForm hero={hero} setShowModal={setShowModal} updateHero={updateHero}></EditHeroForm></Modal>: null}
        <div style={{display: "flex", margin: "auto"}}>
        <div style={{marginRight: "20px", backgroundColor: "white", borderRadius: "20px", padding: "10px"}}>
        <p>Name: {hero.name}</p>
        <p>Project: {hero.hero_project}</p>
        <p>Notes: {hero.notes}</p>
        <p>Email: {hero.email}</p>
        <p>Phone: {hero.phone}</p>
        <p>Rating: {hero.rating}</p>
        <p>Clicks: {hero.clicks}</p>
        {isAdmin ? <button style={{margin: "auto", display: "block"}} onClick={() => setShowModal(true)}>Edit</button> : null}
        </div>
        <img className="bigHeroImg" src={hero.avatar} alt={"hero"}></img>
        </div>
    </div>);
}