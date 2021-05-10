import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'
import MainThemePaginatorMenu from '../../atoms/paginator/mainThemePaginatorMenu'
import TrioGridDesktop from '../../molecules/grid/triogridDesktop'
import './styles.css'
import { device } from '../../templates/devices/devices'
import { IGodObj, IGodsState, IImgObj } from 'stateInterfaces'

type OwnProps = {
    gods: IGodsState
}

type StyledProps = {
    transformYN?: string
}

const Wrapper = styled.div`
    height: auto;
    width: 100vw;
    padding-left: 18vw;
    padding-right: 18vw;

    @media ${device.large_desktop} {
        padding-right: 18vw;
        padding-left: 18vw;
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

        let gods_list: string[] = this.props.gods.gods_list

        let sections_list_gen = () => {
            let number: number = Math.floor(gods_list.length / 3)

            let section_list: string[] = Array.from({ length: number }, () =>
                Math.floor(Math.random() * 40).toString()
            )

            return section_list
        }

        let section_list = sections_list_gen()

        let godsData: IGodObj = this.props.gods.gods
        let god_images: IImgObj = this.props.gods.images

        return (
            <div>
                <ReactFullpage
                    //fullpage options
                    licenseKey={'C49A94F7-3AA84744-B2808534-82E8BCD1'}
                    scrollingSpeed={800} /* Options here */
                    fixedElements="#paginator"
                    anchors={section_list}
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

                                {section_list.map(
                                    (id: string, index: number) => {
                                        return (
                                            <>
                                                <Wrapper className="section fp-auto-height">
                                                    <TransformYWrap
                                                        transformYN={
                                                            index === 0
                                                                ? '-8vh'
                                                                : '-10vh'
                                                        }
                                                    >
                                                        <TrioGridDesktop
                                                            gods_data={godsData}
                                                            gods_list={
                                                                gods_list
                                                            }
                                                            god_images={
                                                                god_images
                                                            }
                                                            index={index}
                                                        />
                                                    </TransformYWrap>
                                                </Wrapper>
                                            </>
                                        )
                                    }
                                )}

                                {/* <Wrapper className="section fp-auto-height">
                                    <TransformYWrap transformYN={'-8vh'}>
                                        <TrioGridDesktop />
                                    </TransformYWrap>
                                </Wrapper>
                                <Wrapper className="section fp-auto-height">
                                    <TransformYWrap transformYN={'-14vh'}>
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
                                </Wrapper> */}
                            </ReactFullpage.Wrapper>
                        )
                    }}
                />
            </div>
        )
    }
}

export default MainPaginator
