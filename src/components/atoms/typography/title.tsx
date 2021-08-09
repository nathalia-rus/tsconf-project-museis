import * as React from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'

interface StyleProps {
    isLarger?: boolean
}

const Text = styled.div<StyleProps>`
    font-family: 'Roboto-Light';
    font-size: 15px;
    color: black;
    text-align: left;
    text-transform: capitalize;

    @media ${device.large_desktop} {
        font-size: 16px;
    }

    @media ${device.mobile_and_ipad} {
        font-size: 19px;
    }
`

type Props = {
    children?: React.ReactNode
    style?: 'default' | 'larger'
}

class Title extends React.Component<Props, {}> {
    render() {
        const { children } = this.props

        return <Text>{children}</Text>
    }
}

export default Title
