import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MainPaginator from '../organisms/fullpageScroll/mainPaginator'
import TopBrandBarDesktop from '../atoms/menu/topBrandBarDesktop'
import { IGodsState } from 'stateInterfaces'
import './styles.css'
import CursorProvider from '../organisms/cursor/cursor'
import { Howl } from 'howler'
import { Waypoint } from 'react-waypoint'

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
        let ambiance = new Howl({
            src: ['/ambiance.wav'],
            autoplay: true,
            loop: true,
            volume: 0.2,
            onload: function () {
                console.log('loaded!')
            },
            onend: function () {
                console.log('Finished!')
            },
        })

        let gods: IGodsState = this.props.gods
        return (
            <CursorProvider>
                <button
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
                    <PageWrapper>
                        <TopBrandBarDesktop />
                        <MainPaginator gods={gods} />
                    </PageWrapper>
                </Waypoint>
            </CursorProvider>
        )
    }
}

export default connect(mapStateToProps, {})(Home)
