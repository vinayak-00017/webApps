import { UserEmail } from "@/store/selectors/userEmail"
import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { useRecoilValue } from "recoil"



export const Appbar = () => {
    const router = useRouter()
    const isEmail = useRecoilValue(UserEmail)


    return(isEmail)?(
        <div style= {{
            display : "flex", 
            justifyContent : "space-between"
        }}>
            <div>
                LVLup
            </div>
            <div style={{
                display : "flex"
            }}>
                <div>
                    <Button onClick={() => {
                        router.push("/signin")
                    }}>
                        Signout
                    </Button>
                </div>
            </div>
        </div>
    ) : (<div style= {{
        display : "flex", 
        justifyContent : "space-between"
    }}>
        <div>
            LVLup
        </div>
        <div style={{
            display : "flex"
        }}>
            <div>
                <Button onClick={() => {
                    router.push("/signin")
                }}>
                    Signin
                </Button>
            </div>
            <div>
                <Button onClick={() => {
                    router.push("/signup")
                }}>
                    Signup
                </Button>
            </div>
        </div>
    </div>)
}

Appbar.getInitialProps = async() => {
    
}