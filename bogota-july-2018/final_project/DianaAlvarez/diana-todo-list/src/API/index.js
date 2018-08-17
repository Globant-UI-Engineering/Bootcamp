import axios from 'axios';


export const fetchPostsFromAPI = () => axios(`http://jsonplaceholder.typicode.com/todos?_page=1&_limit=5`);