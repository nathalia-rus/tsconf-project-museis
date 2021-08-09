import * as React from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'

const Text = styled.div`
    font-family: 'Roboto-Medium';
    font-style: italic;
    font-size: 13px;
    color: #aeaeae;
    text-align: left;
    text-transform: capitalize;
    @media ${device.large_desktop} {
        font-size: 14px;
    }

    @media ${device.mobile_and_ipad} {
        font-size: 13px;
        transform: translateY(1px);
    }
`

type Props = {
    location: string
    date: string
}

class ItemSmallLocationDate extends React.Component<Props, {}> {
    render() {
        const { location, date } = this.props

        return (
            <Text>
                {date}, {location}
            </Text>
        )
    }
}

export default ItemSmallLocationDate
