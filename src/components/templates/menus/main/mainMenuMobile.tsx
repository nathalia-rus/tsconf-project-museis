import * as React from 'react'

import styled from 'styled-components'
import { MenuItem } from 'types'

import MobileMainMenuItem from '../../../atoms/menuItems/mobileMainMenuItem'

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
    width: 100vw;
    height: auto;
`

const MenuBody = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;

    position: fixed;
    width: 50vw;
    height: 55px;

    bottom: 30px;

    background: #7c7c7c;

    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
`

class MainMenuMobile extends React.Component<{}, {}> {
    render() {
        return (
            <MenuContainer>
                <MenuBody>
                    {menuItemsIDsListMobile.map(
                        (menuItemID: string, index: any) => {
                            let menuItem: MenuItem = menuItemsObj[menuItemID]

                            return (
                                <MobileMainMenuItem
                                    menuItem={menuItem}
                                    isActive={
                                        menuItem.name === 'home' ? true : false
                                    }
                                />
                            )
                        }
                    )}
                </MenuBody>
            </MenuContainer>
        )
    }
}

export default MainMenuMobile
