import { userState } from "@/store/atoms/user"
import { UserEmail } from "@/store/selectors/userEmail"
import { Button, Card, Grid, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"


const Signin = () => {

    const setUser = useSetRecoilState(userState)
    const isEmail = useRecoilValue(UserEmail)
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter(); 

    if(isEmail){
        router.push("/course")
    }

    return <div>
        <div style={{
            paddingTop : 150,
            marginBottom : 10,
            display : "flex",
            justifyContent : "center"
        }}>
            <Typography variant={"h6"}>
                Welcome back to LVLup. 
            </Typography>
        </div>
        <div style={{display:"flex" , justifyContent : "center"}}>
            <Card variant="outlined" style={{
                width : 400,
                padding : 20
            }}>
                <TextField fullWidth
                variant="outlined"
                label = "Email"
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                >
                </TextField>
                <br/><br/>
                <TextField fullWidth
                variant="outlined"
                label = "Password"
                type = "password"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                >
                </TextField>
                <br/><br/>

                <Button 
                    variant="contained"
                    onClick={async() => {
                        try{
                            const response = await axios.post("/api/routes/admin/signin",{
                                email : email ,
                                password : password
                            })
                            setUser ({
                                isLoading : true,
                                userEmail : email
                            })
                            router.push("/course")
                            
                            const data = response.data;
                            console.log(data.message);
                        }catch(err){
                            console.error(err)
                        }                      
                    }}
                >
                    Sign in
                </Button>
            </Card>
        </div>
    </div>
}

export default Signin;