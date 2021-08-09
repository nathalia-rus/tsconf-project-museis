import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from 'typesafe-actions'
import { device } from '../devices/devices'

function mapStateToProps(state: RootState) {
    return {}
}

interface Props {
    children?: React.ReactNode
}

const PageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    background-color: #fafafa;
    padding-top: 20px;
    z-index: 0;
    @media ${device.beyond_ipad_mobile} {
        justify-content: space-between;
        flex-direction: row;
        min-height: 50vh;
    }
`

const GreyWrapper: React.SFC<Props> = (props) => (
    <PageWrapper>{props.children}</PageWrapper>
)

export default connect(mapStateToProps, {})(GreyWrapper)
