import axios from 'axios';


export const fetchPostsFromAPI = () => axios(`http://www.clashapi.xyz/api/cards`);