import { useState } from "react";
import HeroListing from "./HeroListing";
import Modal from "./core/Modal";
import AddHeroForm from "./AddHeroForm";
import useHeroes from "../hooks/useHeroes";
import PageControls from "./core/PageControls";
import MultiRangeSlider from "./core/MultiRangeSlider";
import "./styles/HeroTable.css"
import Button from "./core/Button";

function HeroTable({isAdmin}: {isAdmin: boolean}) {
    const {heroes, loading, addHero, updateHero, projects} = useHeroes();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [search, setSearch] = useState("");
    const [project, setProject] = useState("-");
    const [ratingSlider, setRatingSlider] = useState([1,9]);
    const HEROES_PER_PAGE = 10;
    
    const lastHeroIndex = currentPage * HEROES_PER_PAGE
    const firstHeroIndex = lastHeroIndex - HEROES_PER_PAGE;

    const heroesToDisplay = heroes.filter(hero => search === "" ? true : hero.name.toLowerCase().includes(search.toLowerCase()))
    .filter(hero =>  project === "-" ? true : hero.hero_project === project)
    .filter(hero => parseInt(hero.rating) >= ratingSlider[0] && parseInt(hero.rating) <= ratingSlider[1])
    .map((hero, idx) => <HeroListing isAdmin={isAdmin} key={idx} hero={hero} updateHero={updateHero}/>)
    
    if (loading || !projects) {
        return (<div>Loading...</div>)
    }

    return (
        <>
        <input placeholder="Search hero..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="searchBar"></input>
        <div className="tableFilters">
        <div>
            Project: 
        <select className="select" value={project} onChange={(e)=> {console.log(e.target.value);setProject(e.target.value)}}>
            <option>-</option>
            {projects.map((project, idx) => <option key={idx}>{project}</option>)}
        </select>
        </div>
        <MultiRangeSlider
        min={1}
        max={9}
        onChange={({ min, max }: { min: number; max: number }) =>
          setRatingSlider([min, max])
        }
      />
      <Button onClick={()=>setShowModal(true)} text="Add Hero"></Button>
      </div>
      
        <div>
            {heroesToDisplay.slice(firstHeroIndex, lastHeroIndex)}
        </div>
        
        <PageControls itemsPerPage={HEROES_PER_PAGE} totalItems={heroesToDisplay.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        {showModal ? <Modal setShowModal={setShowModal}><AddHeroForm setShowModal={setShowModal} addHero={addHero}></AddHeroForm></Modal>: null}
        </>
    );
}

export default HeroTable;