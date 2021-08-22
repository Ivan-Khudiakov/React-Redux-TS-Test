import React from 'react'
import {Button} from "@material-ui/core"

type PropsType = {
    num: number
    showButtons: () => void
}

export const MainButton: React.FC<PropsType> = ({num, showButtons}) => {
    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => showButtons()}>
                {num}
            </Button>
        </div>
    )
}
