import {AppDispatch} from "../../index";
import {AuthActionEnum, SetAuthAction} from "./auth-types";


export const AuthActionCreators = {
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    login: () => async (dispatch: AppDispatch) => {
        setTimeout(async () => {
            dispatch(AuthActionCreators.setIsAuth(true))

        }, 1000)
    },
    logout: () => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}