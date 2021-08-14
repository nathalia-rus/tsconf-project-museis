import * as React from 'react'
import styled from 'styled-components'

interface Props {
    children?: React.ReactNode
}

const PageWrapper = styled.div`
    padding-left: 5vw;
    padding-right: 5vw;
    width: 100%;
`

const MobileDefaultPadding: React.FunctionComponent<Props> = (props) => (
    <PageWrapper>{props.children}</PageWrapper>
)

export default MobileDefaultPadding
