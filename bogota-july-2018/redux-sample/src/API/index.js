import axios from 'axios';


export const fetchPostsFromAPI = () => axios(`http://jsonplaceholder.typicode.com/posts`);