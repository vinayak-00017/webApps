import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

export interface user {
    email : string;
    password : string
    
}

const {persistAtom} = recoilPersist();

export const userState = atom<{isLoading : boolean , userEmail : null | string}>({
    key : 'userState',
    default : {
        isLoading : true,
        userEmail : null,
      
    }
})