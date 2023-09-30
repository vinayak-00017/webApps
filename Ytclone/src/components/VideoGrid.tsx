import { VideoCard } from "./VideoCard"

const VIDEOS = [{ 
title : "Offroad trails in India",
image : "offroad.jpg",
thumbImage : "thumb.jpg",
channel : "Bike Psycs",
views : "2.5M",
timestamp : "3 months"},{ 
    title : "Offroad trails in India",
    image : "offroad.jpg",
    thumbImage : "thumb.jpg",
    channel : "Bike Psycs",
    views : "2.5M",
    timestamp : "3 months"},{ 
        title : "Offroad trails in India",
        image : "offroad.jpg",
        thumbImage : "thumb.jpg",
        channel : "Bike Psycs",
        views : "2.5M",
        timestamp : "3 months"},{ 
            title : "Offroad trails in India",
            image : "offroad.jpg",
            thumbImage : "thumb.jpg",
            channel : "Bike Psycs",
            views : "2.5M",
            timestamp : "3 months"},{ 
                title : "Offroad trails in India",
                image : "offroad.jpg",
                thumbImage : "thumb.jpg",
                channel : "Bike Psycs",
                views : "2.5M",
                timestamp : "3 months"},{ 
                    title : "Offroad trails in India",
                    image : "offroad.jpg",
                    thumbImage : "thumb.jpg",
                    channel : "Bike Psycs",
                    views : "2.5M",
                    timestamp : "3 months"},{ 
                        title : "Offroad trails in India",
                        image : "offroad.jpg",
                        thumbImage : "thumb.jpg",
                        channel : "Bike Psycs",
                        views : "2.5M",
                        timestamp : "3 months"},{ 
                            title : "Offroad trails in India",
                            image : "offroad.jpg",
                            thumbImage : "thumb.jpg",
                            channel : "Bike Psycs",
                            views : "2.5M",
                            timestamp : "3 months"},{ 
                                title : "Offroad trails in India",
                                image : "offroad.jpg",
                                thumbImage : "thumb.jpg",
                                channel : "Bike Psycs",
                                views : "2.5M",
                                timestamp : "3 months"},

]



export const VideoGrid = () => {
    return <div className="grid grid-cols-1 
    md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                title = {video.title}
                image = {video.image}
                thumbImage = {video.thumbImage}
                channel = {video.channel}
                views = {video.views}
                timestamp = {video.timestamp}
            ></VideoCard>
        </div>)}
    </div>
}