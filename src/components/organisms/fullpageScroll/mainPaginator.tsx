import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'
import MainThemePaginatorMenu from '../../atoms/paginator/mainThemePaginatorMenu'

type OwnProps = {}

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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

    componentWillUnmount() {
        document.getElementById('paginator')!.style.display = 'none'
    }

    render() {
        const changeSection = (section: number) => {
            this.setState({ currentSection: section })
        }

        return (
            <div>
                <ReactFullpage
                    //fullpage options
                    licenseKey={'C49A94F7-3AA84744-B2808534-82E8BCD1'}
                    scrollingSpeed={600} /* Options here */
                    fixedElements="#paginator"
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
                                    paginationtext={`${this.state.currentSection}/${this.state.totalSections}`}
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
                                    goDown={(e: any) => {
                                        e.preventDefault()
                                        return fullpageprops.fullpageApi.moveSectionDown()
                                    }}
                                    goUp={(e: any) => {
                                        e.preventDefault()
                                        return fullpageprops.fullpageApi.moveSectionUp()
                                    }}
                                />

                                <Wrapper className="section">
                                    <div>1</div>
                                </Wrapper>
                                <Wrapper className="section">
                                    <div>2</div>
                                </Wrapper>
                                <Wrapper className="section">
                                    <div>3</div>
                                </Wrapper>
                                <Wrapper className="section">
                                    <div>4</div>
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
