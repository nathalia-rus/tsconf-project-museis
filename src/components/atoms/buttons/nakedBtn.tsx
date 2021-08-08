import * as React from 'react'
import styled from 'styled-components'
import { BtnProps } from 'types'

const NakedBtnStyle = styled.button`
    background-color: transparent;
    border: none;
    padding: 0px;
    cursor: pointer;
    transition: all 0.1s;
    :focus {
        outline: 0;
    }
`

type Props = BtnProps

const NakedBtn: React.FunctionComponent<Props> = (props) => {
    return <NakedBtnStyle>{props.children}</NakedBtnStyle>
}
export default NakedBtn
