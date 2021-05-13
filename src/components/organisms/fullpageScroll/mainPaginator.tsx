import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'
import MainThemePaginatorMenu from '../../atoms/paginator/mainThemePaginatorMenu'
import TrioGridDesktop from '../../molecules/grid/triogridDesktop'
import './styles.css'
import { device } from '../../templates/devices/devices'
import { IGodObj, IGodsState, IImgObj } from 'stateInterfaces'
import { Howl } from 'howler'
import sound_on from '../../../assets/icons/sound_on.svg'
import sound_off from '../../../assets/icons/sound_off.svg'
import { motion } from 'framer-motion'
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
        padding-right: 15vw;
        padding-left: 15vw;
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

const SoundRec = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 24px;
    top: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    background-color: #00e7ff14;
    border: 1px solid #3b3b3b;
    height: 80px;
    width: 40px;
    z-index: 100;
    cursor: pointer;
    :hover {
        background-color: #005aff29;
    }
`

const SoundIcon = styled.img`
    height: 18px;
`

const MotionDivCol = styled(motion.div)`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    width: 100%;
    height: 100%;
    font-family: 'Antonio-ExtraLight';
    text-transform: uppercase;
    font-size: 14px;
`

type LocalState = {
    currentSection: number
    totalSections: number
    isSoundPlaying?: boolean
}

class MainPaginator extends React.Component<OwnProps, LocalState> {
    state = {
        currentSection: 1,
        totalSections: 4,
        isSoundPlaying: false,
    }

    setIsSoundPlaying = (arg?: boolean) => {
        return this.setState({ ...this.state, isSoundPlaying: arg })
    }
    componentWillUnmount() {
        document.getElementById('paginator')!.style.display = 'none'
    }

    ambiance = new Howl({
        src: ['/ambiance.wav'],
        autoplay: false,
        loop: true,
        volume: 0.2,
        onload: function () {
            console.log('loaded!')
        },
        onend: function () {
            console.log('Finished!')
        },
    })

    render() {
        const changeSection = (section: number) => {
            this.setState({ currentSection: section })
        }

        let gods_list: string[] = this.props.gods.gods_list

        let sections_list_gen = () => {
            let number: number = Math.floor(gods_list.length / 3)

            let section_list: string[] = Array.from(
                { length: number },
                (el: any, index: number) => index.toString()
            )

            return section_list
        }

        let section_list = sections_list_gen()

        let godsData: IGodObj = this.props.gods.gods
        let god_images: IImgObj = this.props.gods.images

        let { isSoundPlaying } = this.state

        return (
            <div>
                {console.log('section_list', section_list)}
                <SoundRec
                    onClick={() => {
                        if (isSoundPlaying === true) {
                            this.setIsSoundPlaying(false)
                            this.ambiance.pause()
                        } else {
                            this.setIsSoundPlaying(true)
                            this.ambiance.play()
                        }
                    }}
                >
                    <MotionDivCol
                        whileTap={{ scale: 1.2, transition: { duration: 0.3 } }}
                    >
                        {isSoundPlaying ? (
                            <>
                                <SoundIcon src={sound_on} alt="sound" />
                                <div style={{ paddingTop: '8px' }}>on</div>
                            </>
                        ) : (
                            <>
                                <SoundIcon src={sound_off} alt="sound" />
                                <div style={{ paddingTop: '8px' }}>off</div>
                            </>
                        )}
                    </MotionDivCol>
                </SoundRec>

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
                                    section_list={section_list}
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
                                                                : index === 1
                                                                ? '-12vh'
                                                                : '-20vh'
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
