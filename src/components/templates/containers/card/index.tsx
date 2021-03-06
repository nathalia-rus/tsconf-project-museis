import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import double_arrows from '../../../../assets/icons/double_arrows.svg'
import { device } from '../../devices/devices'

const CardLinkUI = styled(Link)`
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

const Arrow = styled.img`
    position: absolute;
    right: 30px;
    top: 30px;
`

type Props = {
    children?: React.ReactNode
    path: string
}

class Card extends React.Component<Props, {}> {
    render() {
        const { children, path } = this.props

        return (
            <CardLinkUI to={`${path}`}>
                <Arrow src={double_arrows} alt="arrow" />
                <Padding>{children}</Padding>
            </CardLinkUI>
        )
    }
}

export default Card
