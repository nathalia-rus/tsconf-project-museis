import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MenuItem } from 'types'
import { NavigationItem, ONavigationItem } from '../../../global/o'

import Icon from '../icons'

interface Style {
    isActive: boolean
}

const MenuItemStyle = styled.div<Style>`
    background-color: ${(props) =>
        props.isActive === true ? '#999999' : 'none'};
    height: 40px;
    width: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
`

interface Props {
    menuItem: MenuItem
    isActive: boolean
}

const MobileMainMenuItem: React.FunctionComponent<Props> = (props) => {
    let navID: NavigationItem = props.menuItem.id
    let dimension =
        props.menuItem.id === ONavigationItem.Categories ? '22px' : '20px'
    return (
        <MenuItemStyle isActive={props.isActive}>
            <Link to={props.menuItem.path}>
                <Icon height={dimension} width={dimension} icon={navID} />
            </Link>
        </MenuItemStyle>
    )
}
export default MobileMainMenuItem
