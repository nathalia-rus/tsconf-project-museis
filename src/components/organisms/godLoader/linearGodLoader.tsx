import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import athena from '../../../assets/gods/names/athena.png'

import { device } from '../../templates/devices/devices'

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transform: translateY(-50px);
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 520px;
    height: auto;
`

const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    height: auto;
    width: 105%;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    height: auto;
`

const hue_animation = () => keyframes`
	0% {
    filter: hue-rotate(0deg) saturate(1.5);
    

	}
	20% {
      filter: hue-rotate(30deg) saturate(1.5);

	}

  	50% {
      filter: hue-rotate(50deg) saturate(1.5);

	}

    	70% {
      filter: hue-rotate(30deg) saturate(1.5);

	}
	100% {
          filter: hue-rotate(0deg) saturate(1.5);
	}
`

const Img1 = styled.img`
    width: 100%;
    animation-name: ${hue_animation};
    animation-duration: 800ms;
    animation-transition: all ease-in-out infinite;
    transition: all ease-in-out infinite;
    animation-iteration-count: infinite;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    color: white;

    @media ${device.desktop} {
    }

    text-transform: uppercase;
    font-family: Antonio-ExtraLight;
`

const Title = styled.div`
    font-size: 52px;
`

const Artist = styled.div`
    font-size: 22px;
    width: 80px;
    transform: translateY(-4px);
`

// const line_progress_animation = () => keyframes`
// 	0% {
//     width: 0%;

// 	}

// 	100% {
//           width: 100%;
// 	}
// `

type IStyledProps = {
    counter: number
}
const Line = styled.div<IStyledProps>`
    background-color: white;
    width: ${(props) => `${props.counter}%`};
    transition: all ease-in-out 50ms;
    height: 1px;
    transform: translateY(-8px);
`
// animation-name: ${line_progress_animation};
// animation-duration: 5000ms;
// animation-transition: all ease-in-out;
// transition: all ease-in-out;
// animation-iteration-count: 1;

const Pc = styled.div`
    font-size: 16px;
    width: 100px;
`

// 16 - 48 deg

type Props = {}

const LinearGodLoader = (props: Props) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter < 100) {
                setCounter((counter) => counter + 1)
            } else return
        }, 10)

        return () => {
            clearInterval(interval)
        }
    }, [counter])

    return (
        <PageWrapper>
            {console.log(counter)}
            <ContentWrapper>
                <TextContainer>
                    <Title>Gods</Title>
                    <div style={{ paddingLeft: '10px' }} />
                    <Artist>By nrus</Artist>
                </TextContainer>
                <div style={{ paddingTop: '0px' }} />
                <Img1 src={athena} alt={athena} />
                <div style={{ paddingTop: '10px' }} />
                <Col>
                    <Row>
                        <Line counter={counter} />

                        <Pc>{counter}%</Pc>
                    </Row>
                </Col>
            </ContentWrapper>
        </PageWrapper>
    )
}

export default LinearGodLoader
