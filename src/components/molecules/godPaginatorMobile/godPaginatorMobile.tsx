import React from 'react'
import styled, { keyframes } from 'styled-components'
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

const float = () => keyframes`
	0% {
    opacity: 1;
		transform: translate(0px) rotate(0deg) scale(1);;
	}
	50% {
    opacity: 1;

	
    transform: translate(-10px, 10px) rotate(-1deg) scale(1.02);
	}
	100% {
    opacity: 1;
		transform: translate(0px) rotate(0deg) scale(1);;
	}
`
const float1 = () => keyframes`
	0% {
     opacity: 1;

		transform: translate(0px) rotate(0deg) scale(1.01);
	}
	50% {
    opacity: 1;
    		transform: translate(-10px, -10px) rotate(1deg) scale(1);
            
	}
	100% {
   opacity: 1;
	
		transform: translate(0px) rotate(0deg) scale(1.01);;
	}
`

const float2 = () => keyframes`
	0% {
   opacity: 1;
	
		transform: translate(0px) rotate(0deg) scale(1);

	}
	50% {
    opacity: 1;
		
		transform: translate(-10px, -8px) rotate(1deg) scale(0.95);
	}
	100% {
     opacity: 1;
		
		transform: translate(0px) rotate(0deg) scale(1);;
	}
`

type IStyle = {
    elemId?: string
    index?: number
}

const ImgCell = styled.img<IStyle>`
    height: 40vh;
    width: auto;

    transition: all 750ms;

    animation-name: ${(props) =>
        props.index === 0 ? float() : props.index === 1 ? float2() : float1()};
    animation-duration: ${(props) => (props.index === 0 ? '12s' : '13s')};
    animation-transition: all ease-in-out infinite;
    transition: all ease-in-out infinite;
    animation-iteration-count: infinite;
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
                                    <ImgCell
                                        id={'imageIdMobile'}
                                        src={god_images[god.image].url}
                                        alt="god"
                                        elemId={god.id}
                                        index={index}
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
