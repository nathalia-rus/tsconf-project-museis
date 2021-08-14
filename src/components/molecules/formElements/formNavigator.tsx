import * as React from 'react'
import styled from 'styled-components'
import { OBtn } from '../../../global/o'
import Button from '../../atoms/buttons'

const FormNavigatorStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Absolute = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`

type Props = {
    goNext: any
    goPrevious: any
    close: any
    isFirst: boolean 
    isLast: boolean
}

const FormNavigator: React.FunctionComponent<Props> = (props) => {
    return (
        <FormNavigatorStyle>
            <Button onClick={props.goNext} width="80%" btn={OBtn.Primary}>
                 { props.isLast ? "submit":  "next"}
            </Button>
            <div style={{ paddingTop: '25px' }} />
            { !props.isFirst && <Button onClick={props.goPrevious} btn={OBtn.Naked}>
                 previous
            </Button> }

            <Absolute>
                <Button onClick={props.close} btn={OBtn.Close} />
            </Absolute>
        </FormNavigatorStyle>
    )
}
export default FormNavigator
