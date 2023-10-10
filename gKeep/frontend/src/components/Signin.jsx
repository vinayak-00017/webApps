import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../config"
import { useNavigate } from "react-router-dom"
import { useRecoilState, useSetRecoilState } from "recoil"
import { userState } from "../store/atoms/user"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, Typography } from "@mui/material"


export const Signin = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();
    const [errorMessage,setErrorMessage] = useState("");
    const setUserLogin = useSetRecoilState(userState)


    return <div  >
        <div style={{
                paddingTop: 80,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h2"} fontSize={100} style={{
                    color : "white",
                    fontFamily :  'scribble',
                    
                }}>
                Notesy
                </Typography>
            </div>
         
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Card varient = {'outlined'} style = {{width : 400,padding: 20,marginTop: 10}}>
                        {/* <div style={{display : "flex" , justifyContent : "",flexDirection : "column"}}> */}
                        <div>
                            <TextField id="" label="Username" variant="outlined" style={{textAlign: "center"}}
                                type="text"
                                fullWidth = {true}
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                            </div> 
                                <br/><br/>
                            <TextField id="" label="Password" variant="outlined"
                            type="password"
                            fullWidth = {true}
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                                <br/><br/>
        
                        <Button 
                            variant="contained" 
                            onClick={
                                async() => {
                                    try{
                                        const response = await axios.post(`${BASE_URL}/user/login`,
                                        {
                                            username : email,
                                            password : password
                                        }                
                                        )               
                                        let data = response.data;                 
                                        localStorage.setItem("token",data.token);
                                        setUserLogin({
                                            isUser : true
                                        })
                                        navigate("/notes")
                                        
                                    }
                                catch (error) {
                                        console.error("Login Error:", error);
                                        setErrorMessage("An error occurred while logging in.");
                                    }
                            
                                }
                            }>Login</Button>
                        {/* </div> */}
                       
                    </Card>
                </div>
        
        <div>{errorMessage}</div>
    </div>
}