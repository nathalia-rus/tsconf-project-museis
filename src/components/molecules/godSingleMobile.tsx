import React from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
// import ParticlesCanvas from '../organisms/particles/particles'
// import athena from '../../assets/gods/athena.jpg'
import return_arrow from '../../assets/icons/golden_arrow_left.svg'

import { Link } from 'react-router-dom'
import '../atoms/effects/lights.css'
import { IGod, IImgObj, IQuote } from 'stateInterfaces'
// import ParticlesCanvas from '../organisms/particles/particles'

// import SmoothMouseMovement from '../organisms/cursor/smoothMouseMovement'
// import a_test_tilt_1 from '../../assets/images/a_test_tilt_1.png'
// import ImgTilt from '../organisms/cursor/imgTilt'
// import a_test_tilt_2 from '../../assets/images/a_test_tilt_2.png'

const PageWrapper = styled.div<IStyled>`
    display: ${(props) => (props.isLoaderShowing ? 'none' : 'flex')};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    position: relative;
`

const float = () => keyframes`
	0% {
    opacity:$ 1;

		transform: translate(0px) scale(1.6) rotate(0deg);
	}
	25% {
    opacity 0.6;

	
    transform: translate(-3px, 5px) scale(1.6) rotate(0.3deg);
   
	}

	50% {
    opacity 1;

    transform: translate(-5px, 0px) scale(1.5) rotate(0deg);
   
	}

  	75% {
    opacity 0.6;

	
    transform: translate(-3px, -5px) scale(1.6) rotate(-0.3deg);
   
	}

	100% {
    opacity: 1;
		transform: translate(0px) scale(1.6) rotate(0deg);
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


	50% {
    opacity 0.5;
    transform: translate(5px, -3px) scale(0.98) rotate(0deg);
   
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
    margin-top: -20px;
    width: 100vw;
    transition: all 100ms;
    animation-name: ${float};
    animation-duration: 12000ms;
    animation-transition: all ease-in-out infinite;
    transition: all ease-in-out infinite;
    animation-iteration-count: infinite;
`

const TextWrapper = styled.div`
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    transition: all 100ms;
    animation-name: ${float2};
    animation-duration: 8000ms;
    animation-transition: all ease-in-out infinite;
    transition: all ease-in-out infinite;
    animation-iteration-count: infinite;
    z-index: 5;
    max-width: 300px;
    padding-left: 5vw;
`

const Title = styled.div`
    font-family: antonio-extralight;
    font-size: 50px;
    text-transform: uppercase;
`

const Text = styled.div`
    font-family: average-regular;
    font-size: 16px;
    text-align: left;
`
const Source = styled.div`
    font-family: average-regular;
    font-size: 9px;
    letter-spacing: 0.6em;
    text-transform: uppercase;
`
const Author = styled.div`
    font-family: average-regular;
    font-size: 11px;
    letter-spacing: 0.5em;
    color: #8d8d8d;
`
const ReturnText = styled.div`
    font-family: antonio-extralight;
    font-size: 16px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #848484;
    width: 110px;
`

const TopNav = styled(Link)`
    text-decoration: none;
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 6;
`

const Arrow = styled.img`
    height: 20px;
    transform: rotate(180deg) translateY(0px);
    opacity: 1;
`

type Props = {
    god: IGod
    god_images: IImgObj
    quote: IQuote
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
}

class GodSingleMobile extends React.Component<Props, State> {
    state = {
        src: '',
    }
    componentDidMount() {
        let { god_images, god } = this.props

        let url = god_images[god.image].url

        this.onLoad(url)
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
        let { quote } = this.props
        return (
            <>
                {/* <ParticlesCanvas /> */}

                <PageWrapper isLoaderShowing={this.props.isLoaderShowing}>
                    <TopNav to="/">
                        <Arrow src={return_arrow} alt="return" />
                        <ReturnText
                        // className="glitch"
                        // data-glitch={'the gods'}
                        >
                            the gods
                        </ReturnText>
                    </TopNav>

                    <TextWrapper>
                        <Title>
                            <div>
                                <span id="L">A</span>
                                <span id="I">R</span>
                                <span id="G">T</span>

                                <span id="H">E</span>
                                <span id="T">M</span>
                                <span id="G">I</span>
                                <span id="H">S</span>
                            </div>
                            {/* artemis */}
                        </Title>
                        <div style={{ paddingTop: '10px' }} />
                        <Text>{quote.text}</Text>

                        <div style={{ paddingTop: '20px' }} />

                        <Source>{quote.source}</Source>
                        <div style={{ paddingTop: '10px' }} />
                        <Author>{quote.author}</Author>

                        <div style={{ paddingTop: '50px' }} />
                    </TextWrapper>
                    <GodImg
                        src={this.state.src ? this.state.src : 'sdf'}
                        alt="god"
                    />
                </PageWrapper>
            </>
        )
    }
}

export default connect(mapStateToProps, {})(GodSingleMobile)
