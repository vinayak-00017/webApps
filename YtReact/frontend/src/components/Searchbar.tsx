import { useState } from "react"
import youtube from "../apis/youtube";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { videoListState } from "../store/atoms/videoList";
import { channelListState } from "../store/atoms/channelList";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";

export interface VideoItem{
    id : {
        videoId : string;
    };
    snippet : {
        publishedAt : string;
        title : string;
        thumbnails : {
            high : {
                url : string;
            };
        };
        channelTitle : string;
    };
    views : number;
}

// interface Statistics {
//     viewCount : string;
// }  
  

// interface ChannelData {
//     title: string;
//     // Add more channel data properties here as needed
//   }


// interface ChannelResponse {
//     items: {
//       snippet: {
//         title: string;
//         // Add more properties as needed
//       };
//       // Add more properties as needed
//     }[];
//     // Add more properties as needed
//   }  



export const Searchbar = () => {

    const navigate = useNavigate();
    const setVideoList = useSetRecoilState<VideoItem[]>(videoListState)
    // const setChannelList = useSetRecoilState(channelListState)

    const handleSubmit = async(search: string) =>{
        try{
        const response = await youtube.get("/search",{
            params:{
                q : search
            }
        })
        navigate('/')
        setVideoList(response.data.items);
        const videoResults = response.data.items;
        console.log(videoResults)

        // const videoIds : string[] = videoResults.map((video: VideoItem) => video.id.videoId)
        
        // const videoDataPromises  = videoIds.map(async(videoId : string) => {
        //     const videoResponse : AxiosResponse = await youtube.get(
        //         "/videos",{
        //             params : {
        //                 id : videoId,
        //                 part : 'statistics'
        //             }
        //         }
        //     )
        //     const viewcount = videoResponse.data.items[0].statistics.viewCount;
        //     const views = parseInt(viewcount,10)
        //     // console.log(views)
            
        //     const updateVideoInList = (videoResults: VideoItem[], videoId: string, newViews: number) => {
        //         return videoResults.map((video) => {
        //           if (video.id.videoId === videoId) {
        //             return {
        //               ...video,
        //               views: newViews,
        //             };
        //           }
        //           return video;
        //         });
        //       };
              
        //       // Call the function to update the specific video
        //       const updatedVideoList = updateVideoInList(videoResults, videoId, views);

              
        //       // Set the updated videoList state
        //       setVideoList(updatedVideoList);
          
            
        // })



        // const channelIds : string[] = videoResults.map((video: { snippet: { channelId: any; }; }) => video.snippet.channelId);

        // const channelPromises = channelIds.map((channelId) => {
        //     youtube.get<ChannelResponse>("/channels",{
        //         params: {
        //             id : channelId
        //         }
        //     })
        // })

        // const channelResponses : AxiosResponse<ChannelResponse>[]= await Promise.all(channelPromises);

        
        
        // const channels : ChannelData[] = channelResponses.map(
        //     (channelResponse) => channelResponse.data.items[0].snippet
        // )

    }catch(error){
        console.error("Error fetching search results:", error)
    };
    
    
    } 

    return <div>
        <SearchInput onSearch={handleSubmit}/>      
    </div>
} 