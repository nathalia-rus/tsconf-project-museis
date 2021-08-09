import * as React from 'react'
import styled from 'styled-components'
import { BtnProps } from '.'

const NakedBtnStyle = styled.button`
    background-color: transparent;
    border: none;
    padding: 0px;
    cursor: pointer;
    transition: all 0.1s;
    :focus {
        outline: 0;
    }
    text-transform: capitalize;
    font-family: 'Roboto-Light';
    color: ${(props) => (props.disabled === true ? '#C6C6C6' : '#6F6F6F')};
`

const NakedBtn: React.FunctionComponent<BtnProps> = (props) => {
    return <NakedBtnStyle {...props}>{props.children}</NakedBtnStyle>
}
export default NakedBtn
