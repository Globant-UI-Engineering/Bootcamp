import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 9819f93535a87546e9932f140b63accfd44bfbf6fe175a0397a56724ccfc0aea'
  }
});