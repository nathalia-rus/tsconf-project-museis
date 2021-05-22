import React from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'

import { IGod, IGodObj, IImgObj } from 'stateInterfaces'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import purple_arrow_left from '../../../assets/icons/purple_arrow_left.svg'
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
    width: 100%;
    position: relative;
    transition: all 2s;
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
// const float1 = () => keyframes`
// 	0% {
//      opacity: 1;

// 		transform: translate(0px) rotate(0deg) scale(1.01);
// 	}
// 	50% {
//     opacity: 1;
//     		transform: translate(-10px, -10px) rotate(1deg) scale(1);

// 	}
// 	100% {
//    opacity: 1;

// 		transform: translate(0px) rotate(0deg) scale(1.01);;
// 	}
// `

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
    index: number
}

const ImgCell = styled.img<IStyle>`
    height: 40vh;
    width: auto;

    transition: all 750ms;

    animation-name: ${(props) => (props.index === 0 ? float() : float2())};
    animation-duration: ${(props) => (props.index === 0 ? '12s' : '13s')};
    animation-transition: all ease-in-out infinite;
    transition: all ease-in-out infinite;
    animation-iteration-count: infinite;
`

const AbsoluteText = styled.div<IStyle>`
    cursor: pointer;
    position: absolute;
    transition: opacity 500ms, transform 200ms;
    opacity: 1;
    left: 20%;
    bottom: 20px;
    transform: ${(props) =>
        props.index === 0 ? 'translate(0px, 0px)' : 'translate(-10px, 5px)'};

    width: 50px;
    height: 50px;
    z-index: 5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: Antonio-Light;
    text-transform: uppercase;
`

const Title1 = styled.div<IStyle>`
    cursor: pointer;
    font-size: 14px;
    z-index: 5;
    transform: ${(props) =>
        props.index === 0 ? 'translate(-5vw, 0px)' : 'translate(46vw, -45px)'};
`

const Title2 = styled.div<IStyle>`
    cursor: pointer;
    font-size: 28px;
    transform: ${(props) =>
        props.index === 0
            ? 'rotate(180deg) translate(0px, -15px)'
            : 'rotate(180deg) translate(-40vw, 30px)'};
    color: rgb(0, 231, 255, 0.15);
    z-index: 3;
`
const Col = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Arrow = styled.img<IStyle>`
    cursor: pointer;
    width: 100%;
    transition: all 500ms;
    opacity: 1;
    transform: ${(props) =>
        props.index === 0
            ? 'translate(10px, 12px) rotate(0deg)'
            : 'translate(48vw, -44px) rotate(-180deg)'};
    height: 30px;
`

interface Props extends RouteComponentProps<any> {
    gods_list: string[]
    gods_data: IGodObj
    god_images: IImgObj
    index: number
}

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
                            console.log('INDEX!!', index)
                            return (
                                <Wrapper>
                                    <div
                                        style={{
                                            transform:
                                                godId === 'hera'
                                                    ? 'translateX(-10vw)'
                                                    : godId === 'poseidon'
                                                    ? 'translateX(-40px)'
                                                    : 'auto',
                                        }}
                                    >
                                        <ImgCell
                                            id={'imageIdMobile'}
                                            src={god_images[god.image].url}
                                            alt="god"
                                            elemId={god.id}
                                            index={index}
                                        />
                                    </div>

                                    <AbsoluteText
                                        index={index}
                                        onClick={() =>
                                            //  sound.play();
                                            this.props.history.push('/god')
                                        }
                                    >
                                        <Col>
                                            <Title1
                                                className="glitch"
                                                data-glitch={god.name}
                                                index={index}
                                            >
                                                {god.name}
                                            </Title1>
                                            <Title2 index={index}>
                                                {god.name}
                                            </Title2>
                                        </Col>
                                        <Arrow
                                            src={purple_arrow_left}
                                            alt="golden-arrow"
                                            index={index}
                                        />
                                    </AbsoluteText>
                                </Wrapper>
                            )
                        }
                    )}
            </PageWrapper>
        )
    }
}

export default withRouter(connect(mapStateToProps, {})(GodPaginatorMobile))
