import { combineReducers, createStore } from "redux"
import {buttonReducer} from "./button-reducer"

const reducer = combineReducers({
    button: buttonReducer
})

export type AppRootStateType = ReturnType<typeof reducer>

export const store = createStore(reducer)
