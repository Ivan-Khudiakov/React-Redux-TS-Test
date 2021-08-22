import {buttonReducer, ButtonType, changeNumForMainButton, getButtons, StateType} from "./button-reducer";

let startState: StateType = {
    mainButton: {num: 1},
    otherButtons: [] as Array<ButtonType>
}

beforeEach(() => {
    startState = {...startState}
})

describe('test', () => {
    test("correct buttons should be added", () => {
        let action = getButtons()
        const endState = buttonReducer(startState, action)

        expect(endState.otherButtons[0].num).toStrictEqual(1)
        expect(endState.otherButtons[1]).toStrictEqual({id: 2, num: 2})
    })

    test("correct change num for main button", () => {
        let num = 5
        let action = changeNumForMainButton(num)
        const endState = buttonReducer(startState, action)

        expect(endState.mainButton.num).toStrictEqual(5)
    })
})
