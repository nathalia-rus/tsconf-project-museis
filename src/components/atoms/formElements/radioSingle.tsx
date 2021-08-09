import * as React from 'react'
import styled from 'styled-components'

import { Radio } from 'antd'
import 'antd/dist/antd.css'
import './antd.css'
import { device } from '../../templates/devices/devices'
import DesktopDisplay from '../../templates/devices/desktopDisplay'
import MobileDisplay from '../../templates/devices/mobileDisplay'
import Button from '../buttons'
import { EnumBtn } from '../../types/enums'

interface IListItemProps {
    onChange: any
    value: any
    name: any
    active?: any
    onclick?: any
    removeIcon?: boolean
}

interface IStyleProps {
    active?: any
}

const Container = styled.div<IStyleProps>`
    height: 60px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #f9f9f9;
    display: flex;
    flex-direction: row;
    align-items: center;

    color: black;
    :focus {
        outline: 0;
    }

    @media ${device.desktop} {
        width: 430px;
        cursor: pointer;
        background-color: ${(props) => (props.active ? '#f6f6f6' : 'white')};
        justify-content: flex-start;
    }
    @media ${device.mobile} {
        background-color: white;
        width: 100%;
        justify-content: flex-start;
        height: 50px;
    }

    @media ${device.ipad} {
        background-color: white;
        width: 80vw;
        justify-content: center;
    }

    :hover {
        @media ${device.mobile} {
            background-color: white;
        }
        @media ${device.desktop} {
            background-color: #f6f6f6;
            transition: all 0.1s;
        }
    }
`

const RadioStyled = styled(Radio)`
    font-family: 'Roboto-Light' !important;
    line-height: 1.4 !important;
    align-self: flex-start !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: black !important;

    @media ${device.mobile_and_ipad} {
        font-size: 16px !important;
        padding-left: 10px !important;
        width: 78vw;
    }

    @media ${device.desktop} {
        font-size: 20px !important;
        padding-left: 35px !important;
        width: 100vw;
    }
`

const RadioContainer = styled.div`
    @media ${device.desktop} {
        padding-left: 20px;
    }
    display: flex;
    flex: 1;
`

const IconContainer = styled.div`
    @media ${device.desktop} {
        display: none;
    }
    @media ${device.mobile} {
        position: absolute;
        right: 30px;
    }
`

class RadioSingle extends React.Component<IListItemProps, {}> {
    render() {
        const { value, name, onChange, active, onclick, removeIcon } =
            this.props

        return (
            <React.Fragment>
                <DesktopDisplay>
                    <Container
                        active={active}
                        onClick={onclick}
                        onMouseEnter={onclick}
                    >
                        <RadioContainer>
                            <RadioStyled
                                type="radio"
                                value={value}
                                name={value}
                                onChange={onChange}
                            >
                                <span
                                    style={{
                                        paddingLeft: '35px',
                                        transform: 'translateY(3px)',
                                    }}
                                >
                                    {name}
                                </span>
                            </RadioStyled>
                        </RadioContainer>
                    </Container>
                </DesktopDisplay>
                <MobileDisplay>
                    <Container active={active}>
                        <RadioContainer>
                            <RadioStyled
                                type="radio"
                                value={value}
                                name={value}
                                onChange={onChange}
                            >
                                <span
                                    style={{
                                        paddingLeft: '10px',
                                    }}
                                >
                                    {name}
                                </span>
                            </RadioStyled>
                        </RadioContainer>
                        {removeIcon === false && (
                            <IconContainer>
                                <Button btn={EnumBtn.Primary} />
                            </IconContainer>
                        )}
                    </Container>
                </MobileDisplay>
            </React.Fragment>
        )
    }
}

export default RadioSingle
