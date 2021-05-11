import React from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    color: white;
    z-index: 3;
    position: absolute;
    top: 35px;
    left: 35px;

    @media ${device.desktop} {
    }

    text-transform: uppercase;
    @media (max-width: 768px) {
        display: none;
    }
    font-family: Antonio-ExtraLight;
`

const Title = styled.div`
    font-size: 76px;
`

const Artist = styled.div`
    font-size: 22px;
    padding-bottom: 10px;
`

class TopBrandBarDesktop extends React.Component {
    render() {
        return (
            <Container>
                <Title>Gods</Title>
                <div style={{ paddingLeft: '10px' }} />
                <Artist>By Cinderus</Artist>
            </Container>
        )
    }
}

export default TopBrandBarDesktop
