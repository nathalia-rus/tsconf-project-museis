import * as React from 'react'
import './styles.css'
import styled from 'styled-components'
import { device } from './devices'

const OnlyMobileIpad = styled.div`
    @media ${device.beyond_ipad_mobile} {
        display: none;
    }
`

export interface GlobalLayoutProps {
    children?: React.ReactNode
}

const IpadAndMobileDisplay: React.FunctionComponent<GlobalLayoutProps> = (
    props
) => <OnlyMobileIpad>{props.children}</OnlyMobileIpad>
IpadAndMobileDisplay.defaultProps = {
    children: null,
}
export default IpadAndMobileDisplay
