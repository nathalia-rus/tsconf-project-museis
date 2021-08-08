import * as React from 'react'
import styled from 'styled-components'
import { BtnProps } from 'types'

const PrimaryBtnStyle = styled.button<StyledProps>`
    color: ${(props) => (props.disabled === true ? '#C6C6C6' : '#00a5ab')};
`

type StyledProps = {
    disabled?: boolean
}

type Props = BtnProps

const PrimaryBtn: React.FunctionComponent<Props> = (props) => {
    return <PrimaryBtnStyle>{props.children}</PrimaryBtnStyle>
}
export default PrimaryBtn
