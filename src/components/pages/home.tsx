import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const DesktopPageContainer = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

const mapStateToProps = (state: any) => {
    return { gods: state.gods }
}

class Home extends React.Component {
    render() {
        return (
            <DesktopPageContainer>
                <div>This is the main page</div>
            </DesktopPageContainer>
        )
    }
}

export default connect(mapStateToProps, {})(Home)
