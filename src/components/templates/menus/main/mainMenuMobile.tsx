import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MenuItem } from 'types'
import Icon from '../../../atoms/icons'

import { EnumNavigation } from '../../../types/enums'

import { device } from '../../devices/devices'
import { menuItemsIDsListMobile, menuItemsObj } from './mainMenuData'

const MenuContainer = styled.div`
    @media ${device.beyond_ipad_mobile} {
        display: none;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 40px;
    padding-right: 40px;

    position: fixed;
    width: 60vw;
    height: 100px;

    bottom: 20px;

    background: #7c7c7c;

    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
`

class MainMenuMobile extends React.Component<{}, {}> {
    render() {
        return (
            <MenuContainer>
                {menuItemsIDsListMobile.map(
                    (menuItemID: string, index: any) => {
                        let menuItem: MenuItem = menuItemsObj[menuItemID]
                        let enumNav: EnumNavigation = menuItem.id

                        return (
                            <Link to={menuItem.path}>
                                <Icon icon={enumNav} />
                            </Link>
                        )
                    }
                )}
            </MenuContainer>
        )
    }
}

export default MainMenuMobile
