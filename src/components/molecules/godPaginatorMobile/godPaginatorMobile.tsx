import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { IGod, IGodObj, IImgObj } from 'stateInterfaces'
import { RouteComponentProps, withRouter } from 'react-router-dom'

// import ParticlesCanvas from '../organisms/particles/particles'

// import SmoothMouseMovement from '../organisms/cursor/smoothMouseMovement'
// import a_test_tilt_1 from '../../assets/images/a_test_tilt_1.png'
// import ImgTilt from '../organisms/cursor/imgTilt'
// import a_test_tilt_2 from '../../assets/images/a_test_tilt_2.png'

const PageWrapper = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
    display: flex;
    display: grid;
    position: relative;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 90vh;

    padding-top: 5vh;

    z-index: 5;
`

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

interface Props extends RouteComponentProps<any> {
    gods_list: string[]
    gods_data: IGodObj
    god_images: IImgObj
    index: number
}

// const options = {
//     max: 20,
//     perspective: 1000,
//     scale: 1.05,
// }

const mapStateToProps = (state: any) => {
    return { gods: state.gods }
}

type IState = {
    gods_ids_to_map: string[]
}

class GodPaginatorMobile extends React.Component<Props, IState> {
    state = {
        gods_ids_to_map: [],
    }
    componentDidMount() {
        let { index, gods_list } = this.props
        if (index === 0) {
            let gods_ids_to_map = gods_list.slice(0, 2)
            this.setState({ gods_ids_to_map })
        } else if (index === 1) {
            let gods_ids_to_map = gods_list.slice(2, 4)
            this.setState({ gods_ids_to_map })
        } else if (index === 2) {
            let gods_ids_to_map = gods_list.slice(4, 6)
            this.setState({ gods_ids_to_map })
        } else if (index === 3) {
            let gods_ids_to_map = gods_list.slice(6, 8)
            this.setState({ gods_ids_to_map })
        } else if (index === 4) {
            let gods_ids_to_map = gods_list.slice(8, 10)
            this.setState({ gods_ids_to_map })
        }
    }
    render() {
        let { god_images } = this.props

        return (
            <PageWrapper>
                {this.state.gods_ids_to_map.length > 0 &&
                    this.state.gods_ids_to_map.map(
                        (godId: string, index: number) => {
                            let god: IGod = this.props.gods_data[godId]
                            return (
                                <Wrapper>
                                    <img
                                        id={'imageIdMobile'}
                                        src={god_images[god.image].url}
                                        alt="god"
                                        style={{
                                            height: '40vh',
                                            width: 'auto',
                                        }}
                                        // elemId={god.id}
                                        // index={index}
                                    />
                                </Wrapper>
                            )
                        }
                    )}
            </PageWrapper>
        )
    }
}

export default withRouter(connect(mapStateToProps, {})(GodPaginatorMobile))
