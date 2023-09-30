import { userState } from "@/store/atoms/user"
import { Button, Card, Grid, TextField, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"
import { useSetRecoilState } from "recoil"


const Signin = () => {

    const setUser = useSetRecoilState(userState)
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    return <div>
        <div style={{
            paddingTop : 150,
            marginBottom : 10,
            display : "flex",
            justifyContent : "center"
        }}>
            <Typography variant={"h6"}>
                Welcome back to Coursera. 
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
                            
                    }}
                >
                    Sign in
                </Button>
            </Card>
        </div>
    </div>
}

export default Signin;