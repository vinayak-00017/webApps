import axios from "axios";


const KEY = `${import.meta.env.VITE_YT_API}`;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 9,
        key : KEY
    }
})