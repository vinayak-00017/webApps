import { selector } from "recoil";
import { userState } from "../atoms/user";


export const UserEmail = selector({
    key : 'userEmailState',
    get : ({get}) => {
        const state = get(userState);
        return state.userEmail;
    }
})