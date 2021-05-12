import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MainPaginator from '../organisms/fullpageScroll/mainPaginator'
import TopBrandBarDesktop from '../atoms/menu/topBrandBarDesktop'
import { IGodsState } from 'stateInterfaces'
import './styles.css'
import CursorProvider from '../organisms/cursor/cursor'
import ParticlesCanvas from '../organisms/particles/particles'

// import SmoothMouseMovement from '../organisms/cursor/smoothMouseMovement'
// import a_test_tilt_1 from '../../assets/images/a_test_tilt_1.png'
// import ImgTilt from '../organisms/cursor/imgTilt'
// import a_test_tilt_2 from '../../assets/images/a_test_tilt_2.png'

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

// const options = {
//     max: 20,
//     perspective: 1000,
//     scale: 1.05,
// }

class Home extends React.Component<Props> {
    componentDidMount() {}
    render() {
        let gods: IGodsState = this.props.gods
        return (
            <>
                <ParticlesCanvas />
                <CursorProvider>
                    <PageWrapper>
                        <TopBrandBarDesktop />
                        <MainPaginator gods={gods} />
                    </PageWrapper>
                </CursorProvider>
            </>
        )
    }
}

export default connect(mapStateToProps, {})(Home)
