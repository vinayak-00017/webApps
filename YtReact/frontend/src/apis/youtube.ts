import axios from "axios";


const KEY = 'AIzaSyA4tE7YzPYiLUolOM7gSabJnv4W__xzZB8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 9,
        key : KEY
    }
})