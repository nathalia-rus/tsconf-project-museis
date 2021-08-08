import React from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'
import navitem from '../../../assets/icons/navitem.svg'

const Row = styled.a`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;

    @media ${device.beyond_ipad_mobile} {
        display: none;
    }

    text-transform: uppercase;

    font-family: Antonio-ExtraLight;
`

const About = styled.a`
    font-size: 8px;
    padding-bottom: 0px;
    letter-spacing: 3px;
    font-family: Antonio-Light;
    text-decoration: none;
    /* font-family: Average; */
    opacity: 1;
    color: #ffffff85;
`

const Bottom = styled.div`
    bottom: 20px;
    /* left: 50px; */
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    z-index: 20;
`

const NavItem2 = styled.img`
    height: 9px;
    opacity: 1;
    :hover {
        opacity: 1;
    }
    transform: translateY(-2px);
`

class NavbarToMainMobile extends React.Component {
    render() {
        return (
            <Bottom>
                <Row>
                    <div style={{ paddingLeft: '0px' }}>
                        <NavItem2 src={navitem} />
                    </div>
                    <div style={{ paddingLeft: '10px', paddingBottom: '3px' }}>
                        <About
                            target="_blank"
                            href="https://nrus.io"
                            rel="noreferrer"
                        >
                            ALL COLLECTIONS
                        </About>
                    </div>
                    <div style={{ paddingLeft: '10px' }}>
                        <NavItem2 src={navitem} />
                    </div>
                </Row>
            </Bottom>
        )
    }
}

export default NavbarToMainMobile
