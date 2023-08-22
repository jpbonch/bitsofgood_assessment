import api from "../utils/api";
import { Hero } from "../types/Hero";

const getAll = async () => {
  return await api.get<Array<Hero>>("/users");
};

const get = async (id: string) => {
  return await api.get<Hero>(`/users/${id}`);
};

const create = async (data: Hero) => {
  return await api.post<Hero>("/users", data);
};

const update = async (id: string, data: Hero) => {
  return api.put<Hero>(`/users/${id}`, data);
};

const remove = async (id: string) => {
  return await api.delete<Hero>(`/users/${id}`);
};

const HeroService = {
    getAll,
    get,
    create,
    update,
    remove,
};
  
export default HeroService;