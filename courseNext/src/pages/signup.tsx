import { userState } from "@/store/atoms/user"
import { UserEmail } from "@/store/selectors/userEmail"
import { Button, Card, Grid, TextField, Typography } from "@mui/material"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { use, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"


const Signup = () => {

    const setUser = useSetRecoilState(userState)
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();
    const isEmail = useRecoilValue(UserEmail)

    console.log(isEmail)
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
                Welcome to LVLup. 
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
                            const response = await axios.post("/api/routes/admin/signup",{
                                email : email ,
                                password : password
                            })
                            setUser({
                                isLoading : true,
                                userEmail : email
                            })
                            const data = response.data;
                            console.log(data.message);
                        }catch(err){
                            console.error(err)
                        }
                    }}
                >
                    Sign up
                </Button>
                <div>
                    <Link href = "/course">
                        course
                    </Link>
                </div>
            </Card>
        </div>
    </div>
}

export default Signup;