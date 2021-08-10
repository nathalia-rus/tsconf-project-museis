import * as React from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'
import { EnumTypographyStyle } from '../../types/enums'

interface StyleProps {
    typographyStyle?: EnumTypographyStyle[]
}

const Text = styled.div<StyleProps>`
    font-family: 'Roboto-Light';
    font-size: 15px;
    color: black;
    text-align: ${(props) =>
        props.typographyStyle &&
        props.typographyStyle.includes(EnumTypographyStyle.Left) === true
            ? 'left'
            : props.typographyStyle &&
              props.typographyStyle.includes(EnumTypographyStyle.Left) === true
            ? 'right'
            : props.typographyStyle &&
              props.typographyStyle.includes(EnumTypographyStyle.Center) ===
                  true
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
        props.typographyStyle.includes(EnumTypographyStyle.Narrow) === true
            ? '70vw'
            : 'auto'};
`

type Props = {
    children?: React.ReactNode
    typographyStyle?: EnumTypographyStyle[]
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
