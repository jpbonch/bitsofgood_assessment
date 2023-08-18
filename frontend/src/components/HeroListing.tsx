import { Hero } from "../types/Hero";
import "./styles/HeroListing.css";


function HeroListing({hero} : {hero: Hero}) {


    return (
        <div className="listingContainer">
            <img src={hero.avatar} alt="Hero"></img>
            <p>{hero.name}</p>
            <p>{hero.hero_project}</p>
            <p>{hero.notes}</p>
            <p>{hero.rating}</p>
        </div>
    );
}

export default HeroListing;