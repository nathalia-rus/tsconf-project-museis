import React from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
// import ParticlesCanvas from '../organisms/particles/particles'
// import athena from '../../assets/gods/athena.jpg'
import return_arrow from '../../assets/icons/golden_arrow_left.svg'
import { device } from '../templates/devices/devices'
import { Link } from 'react-router-dom'
import '../atoms/effects/lights.css'
// import ParticlesCanvas from '../organisms/particles/particles'

// import SmoothMouseMovement from '../organisms/cursor/smoothMouseMovement'
// import a_test_tilt_1 from '../../assets/images/a_test_tilt_1.png'
// import ImgTilt from '../organisms/cursor/imgTilt'
// import a_test_tilt_2 from '../../assets/images/a_test_tilt_2.png'

const PageWrapper = styled.div<IStyled>`
    display: ${(props) => (props.isLoaderShowing ? 'none' : 'flex')};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: relative;
`

const float = () => keyframes`
	0% {
    opacity:$ 1;

		transform: translate(0px) rotate(0deg);
	}
	25% {
    opacity 0.6;

	
    transform: translate(-3px, 5px) scale(0.99) rotate(0.3deg);
   
	}

	50% {
    opacity 1;

    transform: translate(-5px, 0px) scale(0.98) rotate(0deg);
   
	}

  	75% {
    opacity 0.6;

	
    transform: translate(-3px, -5px) scale(0.99) rotate(-0.3deg);
   
	}

	100% {
    opacity: 1;
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.0);
		transform: translate(0px) rotate(0deg);
	}
`

const float2 = () => keyframes`
	0% {
    opacity: 1;

		transform: translate(0px) rotate(0deg);
	}
	25% {
    opacity 1;

	
    transform: translate(3px, -5px) scale(0.99) rotate(0.3deg);
   
	}

    	40% {
    opacity 1;
	}

	50% {
    opacity 0.5;
    transform: translate(5px, -3px) scale(0.98) rotate(0deg);
   
	}

  	60% {
    opacity 1;
	}

  	75% {
    opacity 1;

	
    transform: translate(3px, 0px) scale(0.99) rotate(-0.3deg);
   
	}

	100% {
    opacity: 1;
		transform: translate(0px) rotate(0deg);
	}
`
const GodImg = styled.img`
    padding-top: 10%;
    width: 80vw;
    height: auto;
    position: absolute;
    left: 0px;
    transition: all 100ms;
    animation-name: ${float};
    animation-duration: 12000ms;
    animation-transition: all ease-in-out infinite;
    transition: all ease-in-out infinite;
    animation-iteration-count: infinite;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 5vw;

    transition: all 100ms;
    animation-name: ${float2};
    animation-duration: 8000ms;
    animation-transition: all ease-in-out infinite;
    transition: all ease-in-out infinite;
    animation-iteration-count: infinite;

    @media ${device.large_desktop} {
        right: 10vw;
    }

    width: 300px;
    padding-right: 5vw;
    transform: translateY(-35px);
`

const Title = styled.div`
    font-family: antonio-extralight;
    font-size: 76px;
    text-transform: uppercase;
`

const Text = styled.div`
    font-family: average-regular;
    font-size: 18px;
`
const Source = styled.div`
    font-family: average-regular;
    font-size: 12px;
    letter-spacing: 0.76em;
    text-transform: uppercase;
`
const Author = styled.div`
    font-family: average-regular;
    font-size: 12px;
    letter-spacing: 0.5em;
    color: #8d8d8d;
`
const ReturnText = styled.div`
    font-family: antonio-extralight;
    font-size: 18px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: white;
    transform: translateY(50px);
    width: 150px;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

type Istyled2 = {
    idHovered: string
}
const Arrow = styled.img<Istyled2>`
    transition: 2000ms;

    transform: ${(props) =>
        props.idHovered === 'arrow'
            ? 'rotate(90deg) translateX(50px)'
            : 'rotate(90deg) translateX(0px)'};
`

type Props = {
    god?: any
    setIsImgLoading: any
    isLoaderShowing: boolean
}

type IStyled = {
    isLoaderShowing: boolean
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
    src: any
    idHovered: string
}

class GodSingle extends React.Component<Props, State> {
    state = {
        src: '',
        idHovered: '',
    }
    componentDidMount() {
        this.onLoad('/athena.jpg')
    }

    setIdHovered = (id: string) => {
        this.setState({ ...this.state, idHovered: id })
    }

    onLoad = (url: string) => {
        let image = document.createElement('img')
        image.src = url

        image.onload = () => {
            let f = () =>
                this.setState({
                    src: image.src,
                })
            setTimeout(() => {
                f()

                this.props.setIsImgLoading(false)
            }, 100)
        }
    }

    render() {
        let { idHovered } = this.state
        return (
            <>
                {/* <ParticlesCanvas /> */}

                <PageWrapper isLoaderShowing={this.props.isLoaderShowing}>
                    <GodImg
                        src={this.state.src ? this.state.src : 'sdf'}
                        alt="god"
                    />
                    <TextWrapper>
                        <Title>artemis</Title>
                        <div style={{ paddingTop: '20px' }} />
                        <Text>
                            The rose Dawn might have found them weeping still
                            had not grey-eyed Athena slowed the night when night
                            was most profound, and held the Dawn under the Ocean
                            of the East.
                        </Text>

                        <div style={{ paddingTop: '30px' }} />

                        <Source>ILLIAD BOOK VI</Source>
                        <div style={{ paddingTop: '10px' }} />
                        <Author>homer</Author>

                        <div style={{ paddingTop: '50px' }} />

                        <StyledLink
                            to="/"
                            onMouseOver={() => this.setIdHovered('arrow')}
                            onMouseLeave={() => this.setIdHovered('')}
                        >
                            <Arrow
                                idHovered={idHovered}
                                src={return_arrow}
                                alt="return"
                            />
                            <div style={{ paddingTop: '15px' }} />
                            <ReturnText
                            // className="glitch"
                            // data-glitch={'the gods'}
                            >
                                <div>
                                    <span id="L">T</span>
                                    <span id="I">H</span>
                                    <span id="G">E</span>
                                    <span> </span>
                                    <span id="H">G</span>
                                    <span id="T">O</span>
                                    <span id="G">D</span>
                                    <span id="H">S</span>
                                </div>
                            </ReturnText>
                        </StyledLink>
                    </TextWrapper>
                </PageWrapper>
            </>
        )
    }
}

export default connect(mapStateToProps, {})(GodSingle)
