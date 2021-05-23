import React from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'

const Container = styled.div`
    @media (min-width: 768px) {
        display: none;
    }

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    color: white;
    z-index: 3;
    position: absolute;
    top: 10px;
    left: 10px;

    @media ${device.desktop} {
    }

    text-transform: uppercase;

    font-family: Antonio-ExtraLight;
`

const Title = styled.div`
    font-size: 21px;
`

const Artist = styled.div`
    font-size: 12px;
    padding-bottom: 3px;
    color: #848484;
`

class TopBrandBarMobile extends React.Component {
    generateLightedTitle = (word: string) => {
        let arr: string[] = word.split('')

        let classArray = [
            'L',
            'I',
            'G',
            'H',
            'T',
            'G',
            'H',
            'L',
            'G',
            'H',
            'T',
            'G',
            'H',
            'L',
            'G',
            'H',
            'T',
            'G',
            'H',
        ]

        return (
            <div>
                {arr.map((str, index) => {
                    return <span id={classArray[index]}>{str}</span>
                })}
            </div>
        )
    }

    render() {
        return (
            <Container>
                <Title>{this.generateLightedTitle('GODS')}</Title>
                <div style={{ paddingLeft: '5px' }} />
                <Artist>By nrus</Artist>
            </Container>
        )
    }
}

export default TopBrandBarMobile
