import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Wrapper = styled.div``

const mapStateToProps = (state: any) => {
    return { gods: state.gods }
}

class DesktopSideNavbar extends React.Component {
    render() {
        return (
            <Wrapper>
                <div>This is the side navbar</div>
            </Wrapper>
        )
    }
}

export default connect(mapStateToProps, {})(DesktopSideNavbar)
