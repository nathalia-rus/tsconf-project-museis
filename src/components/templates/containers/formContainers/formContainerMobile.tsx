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
    handleSubmit: any
}

const FormContainer = styled.form`
    @media ${device.mobile} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const FormContainerMobile: React.SFC<Props> = (props) => (
    <FormContainer
        onSubmit={(e) => {
            e.preventDefault()
            props.handleSubmit()
        }}
    >
        {props.children}
    </FormContainer>
)

export default connect(mapStateToProps, {})(FormContainerMobile)
