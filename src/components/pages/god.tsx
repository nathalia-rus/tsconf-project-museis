import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { IGodsState } from 'stateInterfaces'
import './styles.css'

import LinearGodLoader from '../organisms/godLoader/linearGodLoader'
import GodSingle from '../molecules/godSingle'
import ParticlesCanvas from '../organisms/particles/particles'
import Faded from '../templates/display/faded'
import DesktopDisplay from '../templates/devices/desktopDisplay'
import IpadAndMobileDisplay from '../templates/devices/ipadAndMobileDisplay'
import GodSingleMobile from '../molecules/godSingleMobile'

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
    isLoaderShowing: boolean
    isImageLoading: boolean
}

class God extends React.Component<Props, State> {
    state = {
        isLoaderShowing: true,
        isImageLoading: true,
    }

    setisLoaderShowing = (bool: boolean) => {
        let f = () => this.setState({ ...this.state, isLoaderShowing: bool })
        setTimeout(function () {
            f()
        }, 700)
    }

    setIsImgLoading = (bool: boolean) => {
        this.setState({ ...this.state, isImageLoading: false })
    }
    componentDidMount() {}
    render() {
        // let gods: IGodsState = this.props.gods

        let { isLoaderShowing, isImageLoading } = this.state
        return (
            <>
                {!isLoaderShowing && (
                    <Faded>
                        <ParticlesCanvas />
                    </Faded>
                )}

                <PageWrapper>
                    <Faded>
                        <DesktopDisplay>
                            <GodSingle
                                isLoaderShowing={isLoaderShowing}
                                setIsImgLoading={this.setIsImgLoading}
                            />
                        </DesktopDisplay>

                        <IpadAndMobileDisplay>
                            <GodSingleMobile
                                isLoaderShowing={isLoaderShowing}
                                setIsImgLoading={this.setIsImgLoading}
                            />
                        </IpadAndMobileDisplay>
                    </Faded>

                    {isLoaderShowing && (
                        <Faded>
                            <LinearGodLoader
                                isImageLoading={isImageLoading}
                                setisLoaderShowing={this.setisLoaderShowing}
                            />
                        </Faded>
                    )}
                </PageWrapper>
            </>
        )
    }
}

export default connect(mapStateToProps, {})(God)
