import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/core/Modal";
import EditHeroForm from "../components/EditHeroForm";
import { useParams } from "react-router-dom";
import useHeroes from "../hooks/useHeroes";
import { Hero } from "../types/Hero";

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

 
    return (<div>
        <button onClick={()=> navigate("/heroes")}>Back</button>
        {isAdmin ? <button onClick={() => setShowModal(true)}>Edit</button> : null}
        {showModal ? <Modal setShowModal={setShowModal}><EditHeroForm hero={hero} setShowModal={setShowModal} updateHero={updateHero}></EditHeroForm></Modal>: null}
        <p>Name: {hero.name}</p>
        <p>Project: {hero.hero_project}</p>
        <p>Notes: {hero.notes}</p>
        <p>email: {hero.email}</p>
        <p>phone: {hero.phone}</p>
        <p>rating: {hero.rating}</p>
        <img src={hero.avatar} alt={"hero"}></img>
        <p>Clicks: {hero.clicks}</p>        
    </div>);
}