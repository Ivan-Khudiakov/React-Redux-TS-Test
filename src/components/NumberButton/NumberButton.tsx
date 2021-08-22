import React from 'react'
import {Button} from "@material-ui/core"

type PropsType = {
    num: number
    changeNumber: (num: number) => void
}

export const NumberButton: React.FC<PropsType> = ({num, changeNumber}) => {
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={() => changeNumber(num)}>
                {num}
            </Button>
        </div>
    )
}
