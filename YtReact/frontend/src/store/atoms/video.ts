import { atom } from "recoil";


export const videoState = atom({
    key : 'videoState',
    default : {
        kind : "",
        videoId : '',
        channelTitle : '',
        title : ''

    }
})