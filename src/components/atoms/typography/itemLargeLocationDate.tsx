import * as React from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'

const Text = styled.div`
    font-family: 'Roboto-Medium';
    text-align: right;
    color: rgba(186, 186, 124, 0.35);
    font-size: 32px;
    text-transform: uppercase;

    @media ${device.large_desktop} {
        font-size: 34px;
    }
`

type Props = {
    location: string
    date: string
}

class ItemLargeLocationDate extends React.Component<Props, {}> {
    render() {
        const { location, date } = this.props

        return (
            <Text>
                {location} {date}
            </Text>
        )
    }
}

export default ItemLargeLocationDate
