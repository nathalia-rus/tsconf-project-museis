import * as React from 'react'
import styled from 'styled-components'
import Button from '../../atoms/buttons'
import { EnumBtn } from '../../types/enums'

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
}

const FormNavigator: React.FunctionComponent<Props> = (props) => {
    return (
        <FormNavigatorStyle>
            <Button onClick={props.goNext} width="80%" btn={EnumBtn.Primary}>
                next
            </Button>
            <div style={{ paddingTop: '25px' }} />
            <Button onClick={props.goPrevious} btn={EnumBtn.Naked}>
                previous
            </Button>

            <Absolute>
                <Button onClick={props.close} btn={EnumBtn.Close} />
            </Absolute>
        </FormNavigatorStyle>
    )
}
export default FormNavigator
