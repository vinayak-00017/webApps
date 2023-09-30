import { atom } from "recoil";
import { VideoItem } from "../../components/Searchbar";


export const videoListState = atom<VideoItem[]>({
    key : "videoListState",
    default : []
           
})