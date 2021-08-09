import * as React from 'react'
import styled from 'styled-components'

import { Radio } from 'antd'
import 'antd/dist/antd.css'
import './antd.css'
import { device } from '../../templates/devices/devices'

interface IListItemProps {
    onChange: any
    value: any
    name: any
    active?: any
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

    background-color: white;
    width: 100%;
    justify-content: flex-start;
    height: 50px;

    :hover {
        @media ${device.mobile} {
            background-color: white;
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

    font-size: 16px !important;
    padding-left: 10px !important;
    width: 78vw;
`

const RadioContainer = styled.div`
    display: flex;
    flex: 1;
`

class RadioSingle extends React.Component<IListItemProps, {}> {
    render() {
        const { value, name, onChange, active } = this.props

        return (
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
            </Container>
        )
    }
}

export default RadioSingle
