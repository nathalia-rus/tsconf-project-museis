import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MenuItem } from 'types'
import { OBtn } from '../../../global/o'
import { device } from '../../templates/devices/devices'

import Button from '../buttons'

interface Style {
    isActive: boolean
}

const MenuItemStyle = styled.div<Style>`
    font-size: 16px;
    padding-bottom: 10px;
    font-family: 'Roboto-Light';

    @media ${device.smallest_laptops} {
        font-size: 12px;
    }

    transition: all 100ms;

    :hover {
        color: #baba7c;
    }
`

interface Props {
    menuItem: MenuItem
    isActive: boolean
}

const DesktopMainMenuItem: React.FunctionComponent<Props> = (props) => {
    return (
        <Link to={props.menuItem.path}>
            <Button btn={OBtn.Naked}>
                <MenuItemStyle isActive={props.isActive}>
                    {props.menuItem.name}
                </MenuItemStyle>
            </Button>
        </Link>
    )
}
export default DesktopMainMenuItem
