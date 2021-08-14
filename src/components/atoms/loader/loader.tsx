import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'
import Faded from '../../templates/transitions/faded'

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: white;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: 15;
`
/* display: ${(props) => (props.counter >= 100 ? 'none' : 'flex')}; */

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    height: auto;
`

const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    height: auto;
    width: 105%;
    @media ${device.mobile_and_ipad} {
        width: 110%;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    height: auto;
`
const Line = styled.div<IStyledProps>`
    background-color: black;
    width: ${(props) => `${props.counter}%`};
    transition: all ease-in-out 50ms;
    height: 1px;
    transform: translateY(-8px);
`

const Pc = styled.div`
    font-size: 16px;
    width: 100px;
    font-family: 'Roboto-Light';
    @media ${device.mobile_and_ipad} {
        font-size: 12px;
    }
`

type IStyledProps = {
    counter: number
}

type Props = {}
const Loader = (props: Props) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter < 100) {
                setCounter((counter) => counter + 1)
            } else clearInterval(interval)
        }, 220)
    }, [counter, props])

    return (
        <Wrapper>
            <Faded>
                <Wrap>
                    <Col>
                        <Row>
                            <Line counter={counter} />

                            <Pc>{counter}%</Pc>
                        </Row>
                    </Col>
                </Wrap>
            </Faded>
        </Wrapper>
    )
}

export default Loader
