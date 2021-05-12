import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MainPaginator from '../organisms/fullpageScroll/mainPaginator'
import TopBrandBarDesktop from '../atoms/menu/topBrandBarDesktop'
import { IGodsState } from 'stateInterfaces'
import './styles.css'
import CursorProvider from '../organisms/cursor/cursor'

const PageWrapper = styled.div`
    cursor: none;
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
    componentDidMount() {}
    render() {
        let gods: IGodsState = this.props.gods
        return (
            <CursorProvider>
                {/* <button
                    onClick={() => {
                        ambiance.play()
                    }}
                >
                    play
                </button>
                <Waypoint
                    onEnter={() => {
                        ambiance.play()
                    }}
                >
                </Waypoint> */}
                <PageWrapper>
                    <TopBrandBarDesktop />
                    <MainPaginator gods={gods} />
                </PageWrapper>
            </CursorProvider>
        )
    }
}

export default connect(mapStateToProps, {})(Home)
