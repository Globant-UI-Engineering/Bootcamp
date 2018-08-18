import axios from 'axios';
const ROOT_URL = 'http://www.clashapi.xyz/api/cards';
export const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_CARD = 'FETCH_CARD';

export function fetchCards(){
   const request = axios.get(ROOT_URL);
    return {
        type: FETCH_CARDS,
        payload: request
    };
}

export function fetchCard(idName){
    const request = axios.get(`${ROOT_URL}/${idName}`);
    return{
        type:FETCH_CARD,
        payload:request
    };
}