import { atom } from "recoil";

export interface user {
    email : string;
    password : string
}

export const userState = atom<{isLoading : boolean , userEmail : null | string}>({
    key : 'userState',
    default : {
        isLoading : true,
        userEmail : null
    }
})