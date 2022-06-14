import * as React from 'react'
import styled from 'styled-components'
import { BtnProps } from '.'

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
    min-width: ${(props) => (props.width ? props.width : '130px')};
    height: ${(props) => (props.height ? props.height : '45px')};
    text-transform: capitalize;
    font-family: Arial;
    transition: all 0.1s;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(221, 221, 221, 0.25));

    @media ${device.desktop} {
        font-size: 14px;

        :hover {
            background-color: #baba7c;
            color: white;
        }
    }

    @media ${device.smallest_laptops} {
        font-size: 12px;
    }
`

type StyledProps = {
    disabled?: boolean
    width?: string
    height?: string
}

const PrimaryBtn: React.FunctionComponent<BtnProps> = (props) => {
    return <PrimaryBtnStyle {...props}>{props.children}</PrimaryBtnStyle>
}
export default PrimaryBtn
