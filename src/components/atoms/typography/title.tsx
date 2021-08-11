import * as React from 'react'
import styled from 'styled-components'
import { OTypographyStyle, TypographyStyle } from '../../../global/o'
import { device } from '../../templates/devices/devices'

interface StyleProps {
    typographyStyle?: TypographyStyle[]
}

const Text = styled.div<StyleProps>`
    font-family: 'Roboto-Light';
    font-size: 15px;
    color: black;
    text-align: ${(props) =>
        props.typographyStyle &&
        props.typographyStyle.includes(OTypographyStyle.Left) === true
            ? 'left'
            : props.typographyStyle &&
              props.typographyStyle.includes(OTypographyStyle.Left) === true
            ? 'right'
            : props.typographyStyle &&
              props.typographyStyle.includes(OTypographyStyle.Center) === true
            ? 'center'
            : 'left'};
    text-transform: capitalize;

    @media ${device.large_desktop} {
        font-size: 16px;
    }

    @media ${device.mobile_and_ipad} {
        font-size: 19px;
    }

    width: ${(props) =>
        props.typographyStyle &&
        props.typographyStyle.includes(OTypographyStyle.Narrow) === true
            ? '70vw'
            : 'auto'};
`

type Props = {
    children?: React.ReactNode
    typographyStyle?: TypographyStyle[]
    // cf above:L if consuded at firstm nw, it will tell you
}

class Title extends React.Component<Props, {}> {
    render() {
        const { ...props } = this.props

        return (
            <Text typographyStyle={props.typographyStyle}>
                {props.children}
            </Text>
        )
    }
}

export default Title
