import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import { Appbar } from './appbar'
import { userState } from '@/store/atoms/user'
import { useEffect } from 'react'
import axios from 'axios'
import {cookies} from 'next/headers'
import { NextPageContext } from 'next'

export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
    <Appbar></Appbar>
    <InitUser/>
    <Component {...pageProps} />
  </RecoilRoot>

}

// function getCookie(cookieName : string){
//   const cookies = document.cookie.split(';')
//   console.log(cookies)
//   for(let i =0 ; i< cookies.length; i++){
//     const cookie = cookies[i].trim();
//     if (cookie.startsWith(cookieName + "=")){
//       return cookie.substring(cookie.length + 1)
//     }
//   }
//   return null;3
// }


function InitUser(){
  const setUser = useSetRecoilState(userState)

  useEffect(()=> {
    const init = async() => {
      try{
        const response = await axios.get("http://localhost:3000/api/routes/admin/init", {
          headers : {
          cookie : document.cookie
          }
        })
        if(response.data.status == 200){
          console.log("finally")
        }

      }catch(error){
        console.error(error)
      }
    }
    init();
  },[setUser])

  return <></>
}

App.getServerSideProps  = async(ctx : NextPageContext) => {
  const cookie = ctx.req?.headers.cookie;

}
