import { v4 as uuid } from "uuid";

export class Hero {
  name: string;
  avatar: string;
  hero_project: string;
  notes?: string;
  email: string;
  phone: string;
  rating: string;
  status: boolean;
  id: string;
  clicks: number;

  constructor(
    name: string = "",
    avatar: string = "https://i.imgur.com/N8hZCWK.jpg",
    hero_project: string = "",
    notes: string = "",
    email: string = "",
    phone: string = "",
    rating: string = "",
    status: boolean = false,
    id: string = uuid(),
    clicks: number = 0 
  ) {
    this.name = name;
    this.hero_project = hero_project;
    this.notes = notes;
    this.email = email;
    this.phone = phone;
    this.rating = rating;
    this.avatar = avatar;
    this.status = status;
    this.id = id;
    this.clicks = clicks;
  }
}

