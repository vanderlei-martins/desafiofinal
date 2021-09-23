import axios from "axios";

const api = axios.create();
const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character';

/**
 * Retorna a lista de personagens e dados para a paginação.
 * @returns result | retorna o json com os dados dos personagens
 */
export const getCharacters = async (url) => {
  let result = null;
  const response = await api.get(url ? url : URL_CHARACTERS);
  result = response.data;
  return result;
}

/**
 * 
 * @param id | id do personagem que deseja consultar
 * @returns result | retorna o json com os dados do personagem
 */
export const getCharacter = async (id) => {
  let result = null;
  const response = await api.get(URL_CHARACTERS + `/${id}`);
  result = response.data;
  return result;
}
/**
 * 
 * @param  name 
 * @param  status | "alive", "dead", "unknown"
 * @param  species | Exemplos "Human", "Alien", "unknown"
 * @param  gender | "female", "male", "genderless", "unknown"
 * @returns result | retorna o json com os dados dos personagens
 */
export const getCharacterByFilters = async (name = '', status = '', species = '', gender = '') => {
  let filters = {};
  let result = null;
  if(name){
    filters.name = name;
  }
  if(status){
    filters.status = status;
  }
  if(species){
    filters.species = species;
  }
  if(gender){
    filters.gender = gender;
  }
  var paramsFilters = new URLSearchParams(filters);  
  const response = await api.get(URL_CHARACTERS+`?${paramsFilters}`);
  result = response.data;
  return result;
}