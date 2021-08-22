import React from 'react'
import {NumberButton} from "./components/NumberButton/NumberButton"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "./redux/redux-store"
import {changeNumForMainButton, getButtons, StateType} from "./redux/button-reducer"
import {MainButton} from "./components/MainButton/MainButton"
import './App.css'

export const App = () => {

    const data = useSelector<AppRootStateType, StateType>(store => store.button)

    const dispatch = useDispatch()

    const showButtons = () => {
        dispatch(getButtons())
    }

    const changeNumber = (num: number) => {
        dispatch(changeNumForMainButton(num))
    }

    return (
        <div>
            <MainButton num={data.mainButton.num} showButtons={showButtons}/>
            <div >
                {data.otherButtons.map(item => {
                    return <div className="numberButton" key={item.id}>
                        <NumberButton num={item.num} changeNumber={changeNumber}/>
                    </div>
                })}
            </div>
        </div>

    )
}

