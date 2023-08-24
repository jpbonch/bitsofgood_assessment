import { useState } from "react";
import HeroService from "../services/HeroService";
import { Hero } from "../types/Hero";
import { useEffect } from "react";

export default function useHeroes() {
  const [heroes, setHeroes] = useState<Array<Hero>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const updateHeroes = async () => {
    HeroService.getAll()
      .then((response: any) => {
        response.data.sort((a: Hero, b:Hero) => 
        a.hero_project.toLowerCase().localeCompare(b.hero_project.toLowerCase())
        )
        setHeroes(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const addHero = async (newHero: Hero) => {
    HeroService.create(newHero);
    setHeroes([...heroes, newHero]);
  };

  const getHero = async (id: string) => {
    return HeroService.get(id);
  };

  const updateHero = async (id: string, data: Hero) => {
    HeroService.update(id, data);
    var array = [...heroes]; 
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        array[i] = data;
        setHeroes(array);
        break;
      }
    }
  };

  const removeHero = async (id: string) => {
    HeroService.remove(id);
    // remove hero from state
    var array = [...heroes]; 
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        array.splice(i, 1);
        setHeroes(array);
        break;
      }
    }
  };

  useEffect(() => {
    updateHeroes();
  }, []);

  return {
    heroes,
    updateHeroes,
    getHero,
    addHero,
    updateHero,
    removeHero,
    loading,
  };
}
