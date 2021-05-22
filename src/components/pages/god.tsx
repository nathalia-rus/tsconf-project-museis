import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
    IGod,
    IGodObj,
    IGodsState,
    IImgObj,
    IQuote,
    IQuoteObj,
} from 'stateInterfaces'
import './styles.css'

import LinearGodLoader from '../organisms/godLoader/linearGodLoader'
import GodSingle from '../molecules/godSingle'
import ParticlesCanvas from '../organisms/particles/particles'
import Faded from '../templates/display/faded'
import DesktopDisplay from '../templates/devices/desktopDisplay'
import IpadAndMobileDisplay from '../templates/devices/ipadAndMobileDisplay'
import GodSingleMobile from '../molecules/godSingleMobile'
import { RouteComponentProps, withRouter } from 'react-router-dom'

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

interface Props extends RouteComponentProps<any> {
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
    componentDidMount() {
        console.log(this.props.match.params.id)
    }
    render() {
        let gods_data: IGodObj = this.props.gods.gods
        let god_images: IImgObj = this.props.gods.images
        let god_quotes: IQuoteObj = this.props.gods.quotes

        let god_id: string = this.props.match.params.id
        let god: IGod = gods_data[god_id]
        let quote: IQuote = god_quotes[god.main_quote_id]

        let { isLoaderShowing, isImageLoading } = this.state
        return (
            <>
                {/* {console.log('GOD DATA', god, god_images[god.image].url)} */}
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
                                god={god}
                                god_images={god_images}
                                quote={quote}
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

export default withRouter(connect(mapStateToProps, {})(God))
