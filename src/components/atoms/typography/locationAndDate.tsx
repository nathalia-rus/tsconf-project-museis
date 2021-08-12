import * as React from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'

const Default = styled.div`
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

const Large = styled.div`
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
    style?: 'default' | 'large'
}

// comment: either using O in Title, either using props type like above

class LocationAndDate extends React.Component<Props, {}> {
    render() {
        const { location, date, style } = this.props

        switch (style) {
            case 'large':
                return (
                    <Large>
                        {location} {date}
                    </Large>
                )
            default:
                return (
                    <Default>
                        {date}, {location}
                    </Default>
                )
        }
    }
}

export default LocationAndDate
