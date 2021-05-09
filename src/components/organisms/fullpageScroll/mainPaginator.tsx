import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'
import MainThemePaginatorMenu from '../../atoms/paginator/mainThemePaginatorMenu'
import TrioGridDesktop from '../../molecules/grid/triogridDesktop'
import './styles.css'
import { device } from '../../templates/devices/devices'

type OwnProps = {}

type StyledProps = {
    transformYN?: string
}

const Wrapper = styled.div`
    height: 80vh;
    width: 100vw;
    padding-left: 18vw;
    padding-right: 18vw;
    @media ${device.large_desktop} {
        padding-right: 20vw;
        padding-left: 20vw;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const TransformYWrap = styled.div<StyledProps>`
    position: relative;
    height: 100%;
    wifth: 100%;
    transform: ${(props) =>
        props.transformYN ? `translateY(${props.transformYN})` : 'auto'};
`

type LocalState = {
    currentSection: number
    totalSections: number
}

class MainPaginator extends React.Component<OwnProps, LocalState> {
    state = {
        currentSection: 1,
        totalSections: 4,
    }

    componentWillUnmount() {}

    render() {
        const changeSection = (section: number) => {
            this.setState({ currentSection: section })
        }

        // let down =
        //     this.state.currentSection === this.state.totalSections
        //         ? false
        //         : true
        // let up = this.state.currentSection === 1 ? false : true

        return (
            <div>
                <ReactFullpage
                    //fullpage options
                    licenseKey={'C49A94F7-3AA84744-B2808534-82E8BCD1'}
                    scrollingSpeed={800} /* Options here */
                    fixedElements="#paginator"
                    anchors={['god_1', 'god_2', 'god_3', 'god_4', 'lastPage']}
                    onEnter={(
                        section: any,
                        origin: any,
                        destination: any,
                        direction: any
                    ) => {
                        changeSection(origin.index)
                    }}
                    onLeave={(
                        section: any,
                        origin: any,
                        destination: any,
                        direction: any
                    ) => {
                        changeSection(origin.index + 1)
                    }}
                    render={({ ...fullpageprops }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <MainThemePaginatorMenu
                                    paginationtext={`${this.state.currentSection} / ${this.state.totalSections}`}
                                    down={
                                        this.state.currentSection ===
                                        this.state.totalSections
                                            ? false
                                            : true
                                    }
                                    up={
                                        this.state.currentSection === 1
                                            ? false
                                            : true
                                    }
                                    goDown={(e?: any) => {
                                        e && e.preventDefault()
                                    }}
                                    goUp={(e: any) => {
                                        e && e.preventDefault(e)
                                    }}
                                    currentSectionIndex={
                                        this.state.currentSection
                                    }
                                />

                                <Wrapper className="section fp-auto-height">
                                    <TrioGridDesktop />
                                </Wrapper>
                                <Wrapper className="section fp-auto-height">
                                    <TransformYWrap transformYN={'-10vh'}>
                                        <TrioGridDesktop />
                                    </TransformYWrap>
                                </Wrapper>

                                <Wrapper className="section fp-auto-height">
                                    <TransformYWrap transformYN={'-20vh'}>
                                        <TrioGridDesktop />
                                    </TransformYWrap>
                                </Wrapper>
                                <Wrapper className="section fp-auto-height">
                                    <TransformYWrap transformYN={'-30vh'}>
                                        <TrioGridDesktop />
                                    </TransformYWrap>
                                </Wrapper>
                            </ReactFullpage.Wrapper>
                        )
                    }}
                />
            </div>
        )
    }
}

export default MainPaginator
