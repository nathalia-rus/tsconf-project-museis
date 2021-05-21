import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
// import ParticlesCanvas from '../organisms/particles/particles'
// import athena from '../../assets/gods/athena.jpg'
import return_arrow from '../../assets/icons/return_arrow.svg'
import { device } from '../templates/devices/devices'
import { Link } from 'react-router-dom'

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

const GodImg = styled.img`
    padding-top: 10%;
    width: 80vw;
    height: auto;
    position: absolute;
    left: 0px;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 5vw;

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
    font-size: 15px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: white;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    transition: 1000ms;
    :hover {
        transform: scale(1.1);
    }
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
}

class GodSingle extends React.Component<Props, State> {
    state = {
        src: '',
    }
    componentDidMount() {
        this.onLoad('/athena.jpg')
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

                        <StyledLink to="/">
                            <img src={return_arrow} alt="return" />
                            <div style={{ paddingTop: '15px' }} />
                            <ReturnText>the gods</ReturnText>
                        </StyledLink>
                    </TextWrapper>
                </PageWrapper>
            </>
        )
    }
}

export default connect(mapStateToProps, {})(GodSingle)
