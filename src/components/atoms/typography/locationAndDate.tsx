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

const TextLarge = styled.div`
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
    isLarge?: boolean
}

class LocationAndDate extends React.Component<Props, {}> {
    render() {
        const { location, date, isLarge } = this.props

        if (isLarge === true) {
            return (
                <TextLarge>
                    {location} {date}
                </TextLarge>
            )
        } else {
            return (
                <Text>
                    {date}, {location}
                </Text>
            )
        }
    }
}

export default LocationAndDate
