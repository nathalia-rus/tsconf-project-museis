import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MenuItem } from 'types'
import { OBtn, OMyIcon } from '../../../global/o'
import Button from '../../atoms/buttons'
import Icon from '../../atoms/icons'
import DesktopMainMenuItem from '../../atoms/menuItems/desktopMainMenuItem'

import DesktopDisplay from '../devices/desktopDisplay'
import { device } from '../devices/devices'
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

        position: fixed;
        width: 130px;
        height: 100vh;
        left: 0px;
        top: 0px;
        bottom: 0px;
        background: rgba(186, 186, 124, 0.07);
        border-right: 1px solid #baba7c;
    }

    @media ${device.smallest_laptops} {
        padding-left: 20px;
        padding-right: 20px;
        width: 100px;
    }
`

const BottomBtn = styled.div`
    position: absolute;
    bottom: 40px;
    left: 10%;
    right: 10%;
    width: 80%;
`

const Padding = styled.div`
    padding-top: 20px;
`

class MainMenuDesktop extends React.Component<{}, {}> {
    render() {
        return (
            <DesktopDisplay>
                <MenuContainer>
                    <Icon icon={OMyIcon.Logo} height="5vw" width="5vw" />
                    <Padding />

                    {menuItemsIDsListDesktop.map(
                        (menuItemID: string, index: any) => {
                            let menuItem: MenuItem = menuItemsObj[menuItemID]
                            return (
                                <DesktopMainMenuItem
                                    isActive={false}
                                    menuItem={menuItem}
                                />
                            )
                        }
                    )}

                    <BottomBtn>
                        <Link to={'questionnaire'}>
                            <Button width="100%" btn={OBtn.Primary}>
                                questionnaire
                            </Button>
                        </Link>
                    </BottomBtn>
                </MenuContainer>
            </DesktopDisplay>
        )
    }
}

export default MainMenuDesktop
