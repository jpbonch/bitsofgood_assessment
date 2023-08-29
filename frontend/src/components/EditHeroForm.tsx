import { Hero } from "../types/Hero";
import { useState } from "react";

function EditHeroForm({hero, setShowModal, updateHero} : {hero: Hero, setShowModal: (arg0: boolean) => void, updateHero: (id : string, data: Hero)=> void}) {
    const [formData, setFormData] = useState<Hero>(hero);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }

    const editHero = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateHero(hero.id, formData);
        setShowModal(false);
    }

    return (
        <form onSubmit={editHero}>
            <h2>Edit Hero</h2>
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
            <button className="submitButton" type="submit">Submit</button>
        </form>
    );
}

export default EditHeroForm;