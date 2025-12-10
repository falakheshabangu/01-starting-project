import { Children } from "react"

export default function Tabs( {buttons, ButtonContainer = 'menu', children} ){

    //const ButtonContainer = buttonsContainer

    return(
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            {children}
        </>
    )
}
