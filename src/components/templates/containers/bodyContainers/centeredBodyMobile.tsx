import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from 'typesafe-actions'

function mapStateToProps(state: RootState) {
    return {}
}

interface Props {
    children?: React.ReactNode
}

const SubWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 80vw;
    flex-direction: column;
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    flex-direction: column;
`
const CenteredBodyMobile: React.SFC<Props> = (props) => (
    <Wrap>
        <SubWrap>{props.children}</SubWrap>
    </Wrap>
)

export default connect(mapStateToProps, {})(CenteredBodyMobile)
