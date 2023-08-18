import api from "../utils/api";
import { Hero } from "../types/Hero";

const getAll = () => {
  return api.get<Array<Hero>>("/users");
};

const get = (id: any) => {
  return api.get<Hero>(`/users/${id}`);
};

const create = (data: Hero) => {
  return api.post<Hero>("/users", data);
};

const update = (id: any, data: Hero) => {
  return api.put<any>(`/users/${id}`, data);
};

const remove = (id: any) => {
  return api.delete<any>(`/users/${id}`);
};

const HeroService = {
    getAll,
    get,
    create,
    update,
    remove,
};
  
export default HeroService;