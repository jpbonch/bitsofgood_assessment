import { Hero } from "../types/Hero";
import { useLocation } from "react-router-dom";

export default function HeroInfo() {
    const { state } = useLocation();

    return (<div>
        <p>Name: {state.name}</p>
        <p>Project: {state.hero_project}</p>
        <p>Notes: {state.notes}</p>
        <p>email: {state.email}</p>
        <p>phone: {state.phone}</p>
        <p>rating: {state.rating}</p>
        <img src={state.avatar} alt={"hero"}></img>
        <p>Clicks: {state.clicks}</p>
    </div>);
}