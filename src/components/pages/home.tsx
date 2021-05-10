import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MainPaginator from '../organisms/fullpageScroll/mainPaginator'
import TopBrandBarDesktop from '../atoms/menu/topBrandBarDesktop'
import { IGodsState } from 'stateInterfaces'

const PageWrapper = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

type Props = {
    gods: IGodsState
}

const mapStateToProps = (state: any) => {
    return { gods: state.gods }
}

class Home extends React.Component<Props> {
    render() {
        let gods: IGodsState = this.props.gods
        return (
            <PageWrapper>
                <TopBrandBarDesktop />
                <MainPaginator gods={gods} />
            </PageWrapper>
        )
    }
}

export default connect(mapStateToProps, {})(Home)
