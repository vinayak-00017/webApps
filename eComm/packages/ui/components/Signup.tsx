
import { Button, Card, TextField, Typography } from "@mui/material"
import { useState } from "react"

export function Signup(props: {
    onClick :(email: string, password: string) => void
}){
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div>
        <div style={{
            paddingTop : 150,
            marginBottom : 10,
            display : "flex",
            justifyContent : "center"
        }}>
            <Typography variant="h6">
                Welcome to shopStop
            </Typography>
        </div>
        <div style={{display  : "flex" , justifyContent : "center"}}>
            <Card style={{
                width : 400,
                padding : 20
            }}>
                <TextField
                fullWidth 
                label = "Email"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                >
                </TextField>
                <br/><br/>
                <TextField
                fullWidth 
                label = "password"
                variant="filled"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                >
                </TextField>
                <br/><br/>
                <Button
                variant="contained"
                onClick={async() => {
                    props.onClick(email,password)
                }}
                >
                    Signup
                </Button>
            </Card>
        </div>
    </div>
}