import * as React from 'react'
import styled from 'styled-components'
import { OtypographyOptions, typographyOptions } from '../../../global/o'
import { device } from '../../templates/devices/devices'

interface StyleProps {
    typographyOptions?: typographyOptions[]
}

const Text = styled.div<StyleProps>`
    font-family: 'Roboto-Light';
    font-size: 15px;
    color: black;
    text-align: ${(props) =>
        props.typographyOptions?.includes(OtypographyOptions.Left)
            ? 'left'
            : props.typographyOptions?.includes(OtypographyOptions.Left)
            ? 'right'
            : props.typographyOptions?.includes(OtypographyOptions.Center)
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
        props.typographyOptions?.includes(OtypographyOptions.Narrow)
            ? '70vw'
            : 'auto'};
`

type Props = {
    children: React.ReactNode
    typographyOptions?: typographyOptions[]
}

// comment: either using props type like above, either using O like in here,

const Title: React.FunctionComponent<Props> = (props) => {
    return (
        <Text typographyOptions={props.typographyOptions}>
            {props.children}
        </Text>
    )
}
export default Title
