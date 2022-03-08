import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const createQuery = (route : string)=>() => axios({
    method: 'get',
    url: `https://api.spoonacular.com/${route}?apiKey=d24ea1844d6c4559b5bc53c5dbced11b`
}).then((res)=>res.data)

export const homePageQuery = ()=> createQuery('food/search');
export const getRecipeInformation = (id: any)=> createQuery(`recipes/${id}/information`)