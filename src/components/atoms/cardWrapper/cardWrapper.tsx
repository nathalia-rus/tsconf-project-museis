import * as React from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'

const CardUI = styled.div`
    background-color: white;

    @media ${device.mobile_and_ipad} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 90%;
        height: auto;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.04);
        border-radius: 8px;
        margin-bottom: 25px;
        position: relative;
    }
`

const Padding = styled.div`
    padding: 25px;
`

type Props = {
    children?: React.ReactNode
}

class CardWrapper extends React.Component<Props, {}> {
    render() {
        const { children } = this.props

        return (
            <CardUI>
                <Padding>{children}</Padding>
            </CardUI>
        )
    }
}

export default CardWrapper
