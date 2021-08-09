import * as React from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'

interface IStyled {
    isActive?: boolean
}

const Container = styled.div<IStyled>`
    background-color: #c7c796;
    color: black;
    display: flex;
    width: fit-content;
    justify-content: space-between;
    align-items: center;
    height: 34px;

    padding-left: 15px;
    padding-right: 15px;
    border-radius: 10px;
    text-transform: lowercase;

    @media ${device.mobile_and_ipad} {
        height: 30px;
        background-color: #f3f3d1;
    }

    margin-right: 10px;
`

const Text = styled.div<IStyled>`
    text-transform: lowercase;
    font-family: 'Roboto-Light';
    font-size: 15px;

    @media ${device.large_desktop} {
        font-size: 16px;
    }

    @media ${device.mobile_and_ipad} {
        font-size: 14px;
    }
`

type Props = {
    children?: React.ReactNode
    isActive?: boolean
}

class Tag extends React.Component<Props, {}> {
    render() {
        const { children, isActive } = this.props

        return (
            <Container isActive={isActive}>
                <Text>{children}</Text>
            </Container>
        )
    }
}

export default Tag
