import HeroService from "../services/HeroService";
import { useState } from "react";
import { v4 as uuid } from 'uuid';
import image from '../assets/default.jpg';

interface FormData {
    name: string,
    hero_project: string,
    notes: string,
    email: string,
    phone: string,
    rating: string,
}

const formDefault = {
    name: "",
    hero_project: "",
    notes: "",
    email: "",
    phone: "",
    rating: ""
}

function AddHeroForm() {
    const [formData, setFormData] = useState<FormData>(formDefault);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }

    const addHero = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newHero = {
            ...formData,
            avatar: image,
            status: false,
            id: uuid()
        }
        HeroService.create(newHero)
    }

    return (
        <form onSubmit={addHero}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </label>
            <label>
                Project:
                <input type="text" name="hero_project" value={formData.hero_project} onChange={handleInputChange} />
            </label>
            <label>
                Notes:
                <input type="text" name="notes" value={formData.notes} onChange={handleInputChange} />
            </label>
            <label>
                Email:
                <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <label>
                Phone:
                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
            </label>
            <label>
                Rating:
                <input type="text" name="rating" value={formData.rating} onChange={handleInputChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddHeroForm;