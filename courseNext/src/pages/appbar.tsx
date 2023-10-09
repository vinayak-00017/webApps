import { UserEmail } from "@/store/selectors/userEmail"
import { Button } from "@mui/material"
import { cookies } from "next/headers"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRecoilValue } from "recoil"
import authenticated from "./api/middleware/auth"
import { signIn, signOut, useSession } from "next-auth/react"



export const Appbar = () => {
    const router = useRouter()
    const {data : session} = useSession();


const handleSignin = async() => {
    await signIn();
    router.push('/course')
}    

   

    return(session)?(
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
                        signOut()
                        router.push('/')
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
                <Button onClick={handleSignin}>
                    Signin
                </Button>
            </div>
        </div>
    </div>)
}

