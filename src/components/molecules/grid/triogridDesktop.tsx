import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import purple_arrow_left from '../../../assets/icons/purple_arrow_left.svg'
import './styles.css'
import { device } from '../../templates/devices/devices'
import { IGod, IGodObj, IImgObj } from 'stateInterfaces'

const PageWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    height: 70vh;
    padding-top: 16vh;

    @media (max-width: 768px) {
        display: none;
    }
    z-index: 5;
`

const RelDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: all 2s;
`
type IStyle = {
    idHovered?: string
    elemId?: string
}
const ImgCell = styled.img<IStyle>`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: ${(props) =>
        props.idHovered === props.elemId
            ? 'scale(1.01)'
            : props.idHovered === ''
            ? 'scale(1)'
            : 'scale(0.95)'};
    transition: all 800ms;
`

const AbsoluteGradientBottom = styled.div<IStyle>`
    height: 50vh;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 0px;
    opacity: ${(props) => (props.idHovered === props.elemId ? '0' : '1')};
    background: linear-gradient(180deg, black 10%, rgba(0, 0, 0, 0) 100%);
    transition: all 100ms;
    z-index: 5;
`

const AbsoluteGradientTop = styled.div<IStyle>`
    height: 40vh;
    position: absolute;
    right: 0px;
    left: 0px;
    bottom: 0px;
    opacity: ${(props) => (props.idHovered === props.elemId ? '0' : '1')};
    transition: all 100ms;
    background: linear-gradient(0deg, black 20%, rgba(0, 0, 0, 0) 100%);

    z-index: 5;
`

const AbsoluteText = styled.div<IStyle>`
    cursor: pointer;
    position: absolute;
    transition: opacity 500ms, transform 200ms;
    opacity: ${(props) => (props.idHovered === props.elemId ? '1' : '0')};
    left: 20%;
    bottom: 10vh;
    transform: ${(props) =>
        props.idHovered === props.elemId
            ? 'translate(0px, 0px)'
            : 'translate(-10px, 5px)'};

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

const Title1 = styled.div`
    cursor: pointer;
    font-size: 70px;

    @media ${device.smallest_laptops} {
        font-size: 56px;
    }

    z-index: 5;
`

const Title2 = styled.div`
    cursor: pointer;
    font-size: 78px;

    @media ${device.smallest_laptops} {
        font-size: 64px;
    }

    transform: rotate(180deg) translate(50px, -50px);
    color: rgb(0 43 83 / 35%);
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
    height: 150px;
    transition: all 500ms;
    opacity: ${(props) => (props.idHovered === props.elemId ? '1' : '0')};
    transform: ${(props) =>
        props.idHovered === props.elemId
            ? 'translate(30px, 10px);'
            : 'translate(-150px, 10px);'};

    @media ${device.smallest_laptops} {
        transform: ${(props) =>
            props.idHovered === props.elemId
                ? 'translate(30px, 5px);'
                : 'translate(-120px, 5px);'};

        height: 70px;
    }
`

const mapStateToProps = (state: any) => {
    return { gods: state.gods }
}

type IState = {
    idHovered: string
    gods_ids_to_map: string[]
}

type Props = {
    gods_list: string[]
    gods_data: IGodObj
    god_images: IImgObj
    index: number
}

class TrioGridDesktop extends React.Component<Props, IState> {
    state = {
        idHovered: '',
        gods_ids_to_map: [],
    }

    setIdHovered = (id: string) => {
        this.setState({ ...this.state, idHovered: id })
    }

    componentDidMount() {
        let { index, gods_list } = this.props
        if (index === 0) {
            let gods_ids_to_map = gods_list.slice(0, 3)
            this.setState({ gods_ids_to_map })
        } else if (index === 1) {
            let gods_ids_to_map = gods_list.slice(3, 6)
            this.setState({ gods_ids_to_map })
        } else if (index === 2) {
            let gods_ids_to_map = gods_list.slice(6, 9)
            this.setState({ gods_ids_to_map })
        }
    }

    render() {
        let { idHovered } = this.state

        let { god_images } = this.props

        return (
            <PageWrapper>
                {this.state.gods_ids_to_map.length > 0 &&
                    this.state.gods_ids_to_map.map(
                        (godId: string, index: number) => {
                            let god: IGod = this.props.gods_data[godId]

                            console.log('GID', god)

                            return (
                                <RelDiv
                                    onMouseOver={() =>
                                        this.setIdHovered(god.id)
                                    }
                                    onMouseLeave={() => this.setIdHovered('')}
                                >
                                    <ImgCell
                                        src={god_images[god.image].url}
                                        elemId={god.id}
                                        idHovered={idHovered}
                                    />
                                    <AbsoluteGradientBottom
                                        elemId={god.id}
                                        idHovered={idHovered}
                                    />
                                    <AbsoluteGradientTop
                                        elemId={god.id}
                                        idHovered={idHovered}
                                    />

                                    <AbsoluteText
                                        elemId={god.id}
                                        idHovered={idHovered}
                                    >
                                        <Col>
                                            <Title1
                                                className="glitch"
                                                data-glitch={god.name}
                                            >
                                                {god.name}
                                            </Title1>
                                            <Title2>{god.name}</Title2>
                                        </Col>
                                        <Arrow
                                            elemId={god.id}
                                            idHovered={idHovered}
                                            src={purple_arrow_left}
                                            alt="golden-arrow"
                                        />
                                    </AbsoluteText>
                                </RelDiv>
                            )
                        }
                    )}

                {/* <RelDiv
                    onMouseOver={() => this.setIdHovered('athena2')}
                    onMouseLeave={() => this.setIdHovered('')}
                >
                    <ImgCell
                        src={athena2}
                        elemId={'athena2'}
                        idHovered={idHovered}
                    />
                    <AbsoluteGradientBottom
                        elemId={'athena2'}
                        idHovered={idHovered}
                    />
                    <AbsoluteGradientTop
                        elemId={'athena2'}
                        idHovered={idHovered}
                    />

                    <AbsoluteText elemId={'athena2'} idHovered={idHovered}>
                        <Col>
                            <Title1 className="glitch" data-glitch="Athena">
                                Athena
                            </Title1>
                            <Title2>Athena</Title2>
                        </Col>
                        <Arrow
                            elemId={'athena2'}
                            idHovered={idHovered}
                            src={purple_arrow_left}
                            alt="golden-arrow"
                        />
                    </AbsoluteText>
                </RelDiv>
                <RelDiv
                    onMouseOver={() => this.setIdHovered('hera')}
                    onMouseLeave={() => this.setIdHovered('')}
                >
                    <ImgCell elemId={'hera'} idHovered={idHovered} src={hera} />
                    <AbsoluteGradientBottom
                        elemId={'hera'}
                        idHovered={idHovered}
                    />
                    <AbsoluteGradientTop
                        elemId={'hera'}
                        idHovered={idHovered}
                    />

                    <AbsoluteText elemId={'hera'} idHovered={idHovered}>
                        <Col>
                            <Title1 className="glitch" data-glitch="Hera">
                                Hera
                            </Title1>
                            <Title2>Hera</Title2>
                        </Col>
                        <Arrow
                            elemId={'hera'}
                            idHovered={idHovered}
                            src={purple_arrow_left}
                            alt="golden-arrow"
                        />
                    </AbsoluteText>
                </RelDiv>
                <RelDiv
                    onMouseOver={() => this.setIdHovered('artemis')}
                    onMouseLeave={() => this.setIdHovered('')}
                >
                    <ImgCell
                        elemId={'artemis'}
                        idHovered={idHovered}
                        src={artemis}
                    />
                    <AbsoluteGradientBottom
                        elemId={'artemis'}
                        idHovered={idHovered}
                    />
                    <AbsoluteGradientTop
                        elemId={'artemis'}
                        idHovered={idHovered}
                    />
                    <AbsoluteText elemId={'artemis'} idHovered={idHovered}>
                        <Col>
                            <Title1 className="glitch" data-glitch="Artemis">
                                Artemis
                            </Title1>
                            <Title2>Artemis</Title2>
                        </Col>
                        <Arrow
                            elemId={'artemis'}
                            idHovered={idHovered}
                            src={purple_arrow_left}
                            alt="golden-arrow"
                        />
                    </AbsoluteText>
                </RelDiv> */}
            </PageWrapper>
        )
    }
}

export default connect(mapStateToProps, {})(TrioGridDesktop)
