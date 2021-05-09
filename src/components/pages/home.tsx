import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MainPaginator from '../organisms/fullpageScroll/mainPaginator'

const PageWrapper = styled.div`
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
            <PageWrapper>
                <MainPaginator />
            </PageWrapper>
        )
    }
}

export default connect(mapStateToProps, {})(Home)
