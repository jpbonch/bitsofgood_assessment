import { useState } from "react";
import { Hero } from "../types/Hero";

function AddHeroForm({setShowModal, addHero} : {setShowModal: (arg0: boolean) => void, addHero: (newHero: Hero) => void}) {
    const [formData, setFormData] = useState<Hero>(new Hero());

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }

    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addHero(formData);
        setShowModal(false);
    }

    return (
        <form onSubmit={formSubmit}>
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