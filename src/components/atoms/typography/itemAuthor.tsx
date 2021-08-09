import * as React from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'

interface StyleProps {
    isLarger?: boolean
}

const Text = styled.div<StyleProps>`
    text-transform: capitalize;
    font-family: 'Roboto-Light';
    font-size: 13px;
    color: #636363;

    @media ${device.large_desktop} {
        font-size: 14px;
    }

    @media ${device.mobile_and_ipad} {
        font-size: 16px;
    }
`

type Props = {
    children?: React.ReactNode
    style?: 'default' | 'larger'
}

class ItemAuthor extends React.Component<Props, {}> {
    render() {
        const { children } = this.props

        return <Text>{children}</Text>
    }
}

export default ItemAuthor
