import {setErrorAC, setStatusAC} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api"

export const HandleServerNetworkError = (dispatch: Dispatch, error: string) => {
    dispatch(setErrorAC(error))
    dispatch(setStatusAC('failed'))
}

export const HandleServerAppError = <T>(dispatch: Dispatch, data: ResponseType<T>) => {
    const error = data.messages[0]
    error ? dispatch(setErrorAC(error)) : dispatch(setErrorAC('Some error'))
    dispatch(setStatusAC('failed'))
}