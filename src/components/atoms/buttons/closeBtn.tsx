import * as React from 'react'
import styled from 'styled-components'
import { BtnProps } from '.'
import { EnumIcon } from '../../types/enums'
import Icon from '../icons'

const Btn = styled.button`
    background-color: transparent;
    border: none;
    padding: 0px;
    cursor: pointer;
    transition: all 0.1s;
    :focus {
        outline: 0;
    }
    text-transform: lowercase;
    font-family: 'Roboto-Light';
    color: ${(props) => (props.disabled === true ? '#C6C6C6' : '#6F6F6F')};
    font-style: italic;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`
const Text = styled.div``
const Padding = styled.div`
    padding-right: 3px;
`

const CloseBtn: React.FunctionComponent<BtnProps> = (props) => {
    return (
        <Btn {...props} onClick={props.onClick && props.onClick}>
            <Icon height="14px" icon={EnumIcon.Close} />
            <Padding />
            <Text>close</Text>
        </Btn>
    )
}
export default CloseBtn
