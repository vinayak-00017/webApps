import { selector } from "recoil";
import { courseState } from "../atoms/course";


export const isCourseLoading = selector({
    key : 'isCourseLoadingState',
    get : ({get}) => {
        const state = get(courseState);
        return state.isLoading;
    }
})

export const courseDetails = selector({
    key : 'courseDetailsState',
    get : ({get}) => {
        const state = get(courseState);

        return state.course;
    }
})