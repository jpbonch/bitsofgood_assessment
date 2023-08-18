import HeroService from "../services/HeroService";
import { useEffect, useState } from "react";
import { Hero } from "../types/Hero";
import HeroListing from "./HeroListing";

function HeroTable() {
    const [heroes, setHeroes] = useState<Array<Hero>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getHeroes = () => {
        HeroService.getAll()
            .then((response: any) => {
                setHeroes(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    useEffect(() => {
        getHeroes();
    }, []);

    if (loading) {
        return (<div>Loading...</div>)
    }

    return (
        <>
        <div>
            {heroes.map((hero, idx) => <HeroListing key={idx} hero={hero} />)}
        </div>
        </>
    );
}

export default HeroTable;