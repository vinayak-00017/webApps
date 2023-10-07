import axios from "axios";
import {Signup} from "ui";

export default function SignupPage(){
   return <div>
    <Signup onClick = {async(email,password) => {
        try{
            const response  = await axios.post("/api/signup",{
                email,
                password
            })
            console.log(response)
        }catch(err){
            console.error(err)
        }
    } } />
   </div> 
}