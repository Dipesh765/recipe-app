import axios from "axios";

const createQuery = (route : string)=>() => axios({
    method: 'get',
    url: `https://api.spoonacular.com/${route}?apiKey=d24ea1844d6c4559b5bc53c5dbced11b`
}).then((res)=>res.data)

export const homePageQuery = ()=> createQuery('food/search');
export const getRecipeInformation = (id: any)=> createQuery(`recipes/${id}/information`)
export const autoCompleteQuery = (query: string) => createQuery(`recipes/autocomplete?number=5&query=${query}`)
