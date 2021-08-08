import * as React from 'react'
import styled from 'styled-components'
import { MenuItem } from 'types'
import { device } from '../../templates/devices/devices'
import { EnumBtn } from '../../types/enums'
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

const DesktopMenuItem: React.FunctionComponent<Props> = (props) => {
    return (
        <Button btn={EnumBtn.Naked}>
            <MenuItemStyle isActive={props.isActive}>
                {props.menuItem.name}
            </MenuItemStyle>
        </Button>
    )
}
export default DesktopMenuItem
