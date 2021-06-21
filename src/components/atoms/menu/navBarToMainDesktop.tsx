import React from 'react'
import styled from 'styled-components'
import { device } from '../../templates/devices/devices'
import navitem from '../../../assets/icons/navitem.svg'

const Row = styled.a`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;

    @media ${device.desktop} {
    }

    text-transform: uppercase;
    @media (max-width: 768px) {
        display: none;
    }
    font-family: Antonio-ExtraLight;
`

const About = styled.a`
    font-size: 13px;
    padding-bottom: 0px;
    letter-spacing: 3px;
    font-family: Antonio-Light;
    text-decoration: none;
    /* font-family: Average; */
    color: #ffffff67;
    :hover {
        color: white;
        transition: 100ms all ease-in;
    }
`

const Bottom = styled.div`
    bottom: 30px;
    left: 50px;
    /* left: 50%;
    transform: translateX(-50%); */
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    z-index: 20;
`

const NavItem2 = styled.img`
    height: 10px;
    transform: translateY(-2px);
`

class NavbarToMainDesktop extends React.Component {
    render() {
        return (
            <Bottom>
                <Row>
                    <div style={{ marginLeft: '0px' }}>
                        <NavItem2 src={navitem} />
                    </div>
                    <div style={{ paddingLeft: '20px', paddingBottom: '20px' }}>
                        <About
                            target="_blank"
                            href="https://nrus.io"
                            rel="noreferrer"
                            className="glitch-2"
                            data-glitch-2="WORKS"
                        >
                            WORKS
                        </About>
                    </div>
                    <div style={{ marginLeft: '70px' }}>
                        <NavItem2 src={navitem} />
                    </div>
                    <div style={{ paddingLeft: '25px', paddingBottom: '20px' }}>
                        <About
                            href="https://nrus.io#2"
                            className="glitch-2"
                            rel="noreferrer"
                            target="_blank"
                            data-glitch-2="ABOUT"
                        >
                            ABOUT
                        </About>
                    </div>
                    <div style={{ marginLeft: '70px' }}>
                        <NavItem2 src={navitem} />
                    </div>
                </Row>
            </Bottom>
        )
    }
}

export default NavbarToMainDesktop

// <Row>
//     {/* <NavItem src={navitem} /> */}
//     <div style={{ marginLeft: '12px' }}>
//         <About className="glitch-2" data-glitch-2="ALL WORKS">
//             ALL WORKS
//         </About>
//     </div>
// </Row>
// <div style={{ marginLeft: '30px' }} />

// <Row>
//     {/* <NavItem src={navitem} /> */}
//     <div style={{ marginLeft: '12px' }}>
//         <About className="glitch-2" data-glitch-2="ABOUT">
//             ABOUT
//         </About>
//     </div>
// </Row>
