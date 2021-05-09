import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import artemis from '../../../assets/gods/artemis.png'
import athena2 from '../../../assets/gods/athena2.png'
import hera from '../../../assets/gods/hera.png'
import golden_arrow_left from '../../../assets/icons/golden_arrow_left.svg'

const PageWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    height: 80vh;

    @media (max-width: 768px) {
        display: none;
    }
`

const RelDiv = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: relative;
    transition: all 1s;
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
        props.idHovered === props.elemId ? 'scale(1.01)' : 'scale(1)'};
    transition: all 300ms;
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
    position: absolute;
    transition: opacity 500ms, transform 200ms;
    opacity: ${(props) => (props.idHovered === props.elemId ? '1' : '0')};
    left: 50%;
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
const Title1 = styled.div``

const Title2 = styled.div``

const mapStateToProps = (state: any) => {
    return { gods: state.gods }
}

type IState = {
    idHovered: string
}

class TrioGridDesktop extends React.Component<{}, IState> {
    state = {
        idHovered: '',
    }

    setIdHovered = (id: string) => {
        this.setState({ ...this.state, idHovered: id })
    }
    render() {
        let { idHovered } = this.state
        return (
            <PageWrapper>
                <RelDiv
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
                        <Title1>Athena</Title1>
                        <Title2>Athena</Title2>
                        <ImgCell
                            elemId={'athena2'}
                            idHovered={idHovered}
                            src={golden_arrow_left}
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
                        <img src={golden_arrow_left} alt="golden-arrow" />
                        <div></div>
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
                        <img src={golden_arrow_left} alt="golden-arrow" />
                    </AbsoluteText>
                </RelDiv>
            </PageWrapper>
        )
    }
}

export default connect(mapStateToProps, {})(TrioGridDesktop)
