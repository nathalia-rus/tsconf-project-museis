import * as React from 'react'
import styled from 'styled-components'
import { MenuItem } from 'types'
import Icon from '../../../atoms/icons'
import DesktopMenuItem from '../../../atoms/menuItems/desktopMenuItem'
import { EnumIcon } from '../../../types/enums'
import { device } from '../../devices/devices'
import { menuItemsIDsListDesktop, menuItemsObj } from './mainMenuData'

const MenuContainer = styled.div`
    display: none;

    @media ${device.beyond_ipad_mobile} {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 0px;

        position: absolute;
        width: 130px;
        height: 100vh;
        left: 0px;
        top: 0px;
        bottom: 0px;
        background: rgba(186, 186, 124, 0.07);
    }

    @media ${device.smallest_laptops} {
        padding-left: 20px;
        padding-right: 20px;
        width: 100px;
    }
`

class MainMenuDesktop extends React.Component<{}, {}> {
    render() {
        return (
            <MenuContainer>
                <Icon icon={EnumIcon.Logo} height="5vw" width="5vw" />
                <div style={{ paddingTop: '20px' }} />

                {menuItemsIDsListDesktop.map(
                    (menuItemID: string, index: any) => {
                        let menuItem: MenuItem = menuItemsObj[menuItemID]
                        return (
                            <DesktopMenuItem
                                isActive={false}
                                menuItem={menuItem}
                            />
                        )
                    }
                )}
            </MenuContainer>
        )
    }
}

export default MainMenuDesktop
