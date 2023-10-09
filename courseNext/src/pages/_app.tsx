import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import { Appbar } from './appbar'
import { userState } from '@/store/atoms/user'
import { useEffect } from 'react'
import axios from 'axios'
import {cookies} from 'next/headers'
import { NextPageContext } from 'next'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps) {
  return<SessionProvider session={pageProps.session}>
  <RecoilRoot>
    <Appbar></Appbar>   
    <Component {...pageProps} />
  </RecoilRoot>
  </SessionProvider> 

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

