import { UserEmail } from "@/store/selectors/userEmail"
import { Button } from "@mui/material"
import { cookies } from "next/headers"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRecoilValue } from "recoil"



export const Appbar = () => {
    const router = useRouter()
    const isEmail = useRecoilValue(UserEmail)


function deleteCookie(name : string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }     

      

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
                        deleteCookie("auth")
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