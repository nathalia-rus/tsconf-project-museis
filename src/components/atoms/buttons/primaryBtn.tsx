import * as React from 'react'
import styled from 'styled-components'
import { BtnProps } from 'types'
import { device } from '../../templates/devices/devices'

const PrimaryBtnStyle = styled.button<StyledProps>`
    color: ${(props) => (props.disabled === true ? '#C6C6C6' : '#6F6F6F')};
    filter: drop-shadow(0px 4px 4px rgba(221, 221, 221, 0.25));
    border: 1px solid #baba7c;
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    width: ${(props) => (props.width ? props.width : 'auto')};
    height: ${(props) => (props.height ? props.height : '40px')};
    text-transform: capitalize;
    font-family: 'Roboto-Light';
    transition: all 0.1s;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(221, 221, 221, 0.25));

    @media ${device.desktop} {
        font-size: 14px;
    }

    @media ${device.smallest_laptops} {
        font-size: 12px;
    }

    :hover {
        background-color: #baba7c;
        color: white;
    }
`

type StyledProps = {
    disabled?: boolean
    width?: string
    height?: string
}

type Props = BtnProps

const PrimaryBtn: React.FunctionComponent<Props> = (props) => {
    return <PrimaryBtnStyle {...props}>{props.children}</PrimaryBtnStyle>
}
export default PrimaryBtn
