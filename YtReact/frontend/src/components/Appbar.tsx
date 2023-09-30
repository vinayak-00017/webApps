import { useNavigate } from "react-router-dom"
import { Searchbar } from "./Searchbar"


export const Appbar = () => {

    const navigate = useNavigate();

    return <div className="flex justify-between pt-1 p-3 items-center">
        <div 
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
        >
            <img src="Youtube.png" className="h-6 w-25 "></img>
    
        </div>
        <div>
            <Searchbar></Searchbar>
        </div>
        <div>
        <button 
        type="button" 
        className=" text-blue-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-black dark:text-blue dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={()=> navigate("/signin")}
        >           
            Sign in
            </button>
            
        </div>
    </div>
}