import { useNavigate } from "react-router-dom"


export function VideoCard(props:any){

    const navigate = useNavigate();

    return <div 
    className="p-3 cursor-pointer"
    onClick={()=>navigate("/watch")}
    >
            <img src={props.image} className="rounded-xl"/>
        <div className="grid grid-cols-12 pt-2">
            <div className=" col-span-2 pl-1">
                <img className="rounded-full w-14 h-14" src={props.thumbImage}></img>
            </div>
            <div className="col-span-10 md:pl-2 lg: pl-5">
                <div className="col-span-10">
                     {props.title}
                </div>             
        
                <div className="col-span-10
                text-gray-400 text-base">
                    {props.channel}
                </div>

                <div className="col-span-10
                text-gray-400 text-base">
                    {props.views} views | {props.timestamp} 
                </div>
            </div>
        </div>
    </div>
}
