import { useState } from "react"
import { BASE_URL } from "../config.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user.js";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Signup = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const setUserLogin = useSetRecoilState(userState)
    const navigate = useNavigate();


    return <div>
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="" label="Username" variant="outlined" 
      type="text"
      onChange={(e)=> setEmail(e.target.value)}
      />
      <TextField id="" label="Password" variant="outlined"
      type="password"
      onChange={(e)=> setPassword(e.target.value)}
      />
     
    </Box>
    <Button 
        variant="contained" 
        onClick={ async()=>{
            const response = await axios.post(`${BASE_URL}/user/signup` , {
                username : email,
                password : password
            })
            let data = response.data;
            localStorage.setItem("token",data.token)
            setUserLogin({
                isUser : true
            })
            navigate("/notes")

        }}>Signup</Button>

    </div>
}