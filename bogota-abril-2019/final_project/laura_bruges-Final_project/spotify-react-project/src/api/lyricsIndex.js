import axios from 'axios';
import { LYRICS_BASE_URL }  from '../utils/EndpointSettings' 
const instance = axios.create({
    baseURL: LYRICS_BASE_URL
})
export default instance