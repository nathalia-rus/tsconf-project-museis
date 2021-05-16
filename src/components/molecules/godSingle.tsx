import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ParticlesCanvas from '../organisms/particles/particles'
import athena from '../../assets/gods/athena.jpg';
import return_arrow from "../../assets/icons/return_arrow.svg";

// import ParticlesCanvas from '../organisms/particles/particles'

// import SmoothMouseMovement from '../organisms/cursor/smoothMouseMovement'
// import a_test_tilt_1 from '../../assets/images/a_test_tilt_1.png'
// import ImgTilt from '../organisms/cursor/imgTilt'
// import a_test_tilt_2 from '../../assets/images/a_test_tilt_2.png'

const PageWrapper = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`

const GodImg = styled.img`
padding-top: 10%;
    width: 100%;
    height: 100%;
    object-fit: contain;
    

`

const TextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 30vw;
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
color: #8D8D8D;
`
const ReturnText = styled.div`
font-family: antonio-extralight;
font-size: 15px;
letter-spacing: 0.25em;
text-transform: uppercase;
`

type Props = {
    god?: any
}

const mapStateToProps = (state: any) => {
    return { gods: state.gods }
}

// const options = {
//     max: 20,
//     perspective: 1000,
//     scale: 1.05,
// }

class GodSingle extends React.Component<Props> {
    componentDidMount() {}
    render() {
      
        return (
            <>
                <ParticlesCanvas />

                <PageWrapper>
                    <GodImg src={athena} alt="god" />

                    <TextWrapper>
                      <Title>artemis</Title>
<div style={{ paddingTop: "20px"}} />
                       <Text>The rose Dawn might have found them weeping still had not grey-eyed Athena slowed the night when night was most profound, and held the Dawn under the Ocean of the East.


</Text>

<div style={{ paddingTop: "30px"}} />

<Source>ILLIAD BOOK VI</Source>
<div style={{ paddingTop: "10px"}} />
<Author>homer</Author>

<div style={{ paddingTop: "50px"}} />

<img src={return_arrow} alt="return"/>
<div style={{ paddingTop: "15px"}} />
<ReturnText>the gods</ReturnText>


                      
                      </TextWrapper>
                </PageWrapper>
            </>
        )
    }
}

export default connect(mapStateToProps, {})(GodSingle)
