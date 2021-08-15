import * as React from 'react'
import './styles.css'
import styled from 'styled-components'

import { device } from './devices'

const OnlyDesktopWrapper = styled.div`
    @media ${device.mobile_and_ipad} {
        display: none;
    }
`

export interface GlobalLayoutProps {
    children?: React.ReactNode
}

const DesktopDisplayOnly: React.FunctionComponent<GlobalLayoutProps> = (
    props
) => <OnlyDesktopWrapper>{props.children}</OnlyDesktopWrapper>
DesktopDisplayOnly.defaultProps = {
    children: null,
}
export default DesktopDisplayOnly
