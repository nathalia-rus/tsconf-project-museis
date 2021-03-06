import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from 'typesafe-actions'
import { device } from '../../devices/devices'

function mapStateToProps(state: RootState) {
    return {}
}

interface Props {
    children?: React.ReactNode
}

const GreyBodyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
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

const GreyWrapper: React.FunctionComponent<Props> = (props) => (
    <GreyBodyWrapper>{props.children}</GreyBodyWrapper>
)

export default connect(mapStateToProps, {})(GreyWrapper)
