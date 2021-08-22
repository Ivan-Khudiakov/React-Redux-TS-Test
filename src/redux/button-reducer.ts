export type ButtonType = {
    id: number
    num: number
}
const initialState = {
    mainButton: {num: 1},
    otherButtons: [] as Array<ButtonType>
}

export type StateType = typeof initialState

export const buttonReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case GET_BUTTONS: {
            let buttonArray = [{id: 1, num: 1}, {id: 2, num: 2}, {id: 3, num: 3}]
            return {
                ...state, otherButtons: [...buttonArray]
            }
        }
        case CHANGE_NUM_FOR_MAIN_BUTTON: {
            return {...state, mainButton: {num: action.num}, otherButtons: []}
        }
        default:
            return state
    }
}

const GET_BUTTONS = "buttons/GET_BUTTONS"
const CHANGE_NUM_FOR_MAIN_BUTTON = "buttons/CHANGE_NUM_FOR_MAIN_BUTTON"

type ActionType =
    ReturnType<typeof getButtons> |
    ReturnType<typeof changeNumForMainButton>

//actionCreators
export const getButtons = () => ({type: GET_BUTTONS} as const)
export const changeNumForMainButton = (num: number) => ({type: CHANGE_NUM_FOR_MAIN_BUTTON, num} as const)
