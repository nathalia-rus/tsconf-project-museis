import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { IGodsState } from 'stateInterfaces'
import './styles.css'

import LinearGodLoader from '../organisms/godLoader/linearGodLoader'
import ParticlesCanvas from '../organisms/particles/particles'
import Faded from '../templates/display/faded'

// import SmoothMouseMovement from '../organisms/cursor/smoothMouseMovement'
// import a_test_tilt_1 from '../../assets/images/a_test_tilt_1.png'
// import ImgTilt from '../organisms/cursor/imgTilt'
// import a_test_tilt_2 from '../../assets/images/a_test_tilt_2.png'

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
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
type State = {
    isLoader: boolean
}

class God extends React.Component<Props, State> {
    state = {
        isLoader: true,
    }

    setIsLoader = (bool: boolean) => {
        let f = () => this.setState({ isLoader: bool })
        setTimeout(function () {
            f()
        }, 700)
    }
    componentDidMount() {}
    render() {
        // let gods: IGodsState = this.props.gods

        let { isLoader } = this.state
        return (
            <>
                {!isLoader && (
                    <Faded>
                        <ParticlesCanvas />
                    </Faded>
                )}

                {!isLoader && <div>god</div>}

                <PageWrapper>
                    {isLoader && (
                        <LinearGodLoader setIsLoader={this.setIsLoader} />
                    )}
                </PageWrapper>
            </>
        )
    }
}

export default connect(mapStateToProps, {})(God)
