import { useRecoilValue } from "recoil"
import { VideoCard } from "./VideoCard"
import { videoListState } from "../store/atoms/videoList"
import { VideoItem } from "./Searchbar"


function formatVideoTimestamp(publishedAt: string): string {
    const currentDate = new Date();
    const videoDate = new Date(publishedAt);
    const timeDifference = currentDate.getTime() - videoDate.getTime();
  
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const monthsDifference = Math.floor(daysDifference / 30);
    const yearsDifference = Math.floor(monthsDifference / 12);
  
    if (yearsDifference > 0) {
      return `${yearsDifference} ${yearsDifference === 1 ? 'year' : 'years'} ago`;
    } else if (monthsDifference > 0) {
      return `${monthsDifference} ${monthsDifference === 1 ? 'month' : 'months'} ago`;
    } else if (daysDifference > 0) {
      return `${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago`;
    } else if (hoursDifference > 0) {
      return `${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutesDifference > 0) {
      return `${minutesDifference} ${minutesDifference === 1 ? 'minute' : 'minutes'} ago`;
    } else {
      return `${secondsDifference} ${secondsDifference === 1 ? 'second' : 'seconds'} ago`;
    }
  } 


export const VideoGrid = () => {

    const videos : VideoItem[] = useRecoilValue(videoListState)

    return <div className="grid grid-cols-1 
    md:grid-cols-2 lg:grid-cols-4">
        {videos.map(video => <div >
            <VideoCard
                title = {video.snippet.title}
                image = {video.snippet.thumbnails.high.url}
                thumbImage = {video.thumbImage}
                channel = {video.snippet.channelTitle}
                views = {video.views}
                timestamp = {formatVideoTimestamp(video.snippet.publishedAt)}
            ></VideoCard>
        </div>)}
    </div>
}