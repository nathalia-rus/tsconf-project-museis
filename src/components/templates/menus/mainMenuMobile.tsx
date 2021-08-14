import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import styled from 'styled-components'
import { MenuItem } from 'types'
import { NavigationItem, ONavigationItem } from '../../../global/o'

import MobileMainMenuItem from '../../atoms/menuItems/mobileMainMenuItem'
import IpadAndMobileDisplay from '../devices/ipadAndMobileDisplay'

import { menuItemsIDsListMobile, menuItemsObj } from './mainMenuData'

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: auto;
    z-index: 30;
`

const MenuBody = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;
    position: fixed;
    width: 70vw;
    height: 55px;

    bottom: 30px;

    background: #7c7c7c;

    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
`

interface Props extends RouteComponentProps<any> {}

class MainMenuMobile extends React.PureComponent<Props, {}> {
    render() {
        let pathname: string = this.props.history.location.pathname

        let pathsWithMenu: string[] = [`/`, `/${ONavigationItem.Literature}`]
        return (
            <IpadAndMobileDisplay>
                {pathsWithMenu.indexOf(pathname) > -1 && (
                    <MenuContainer>
                        <MenuBody>
                            {menuItemsIDsListMobile.map(
                                (menuItemID: NavigationItem, index: any) => {
                                    let menuItem: MenuItem =
                                        menuItemsObj[menuItemID]

                                    return (
                                        <MobileMainMenuItem
                                            menuItem={menuItem}
                                            isActive={
                                                pathname === menuItem.path
                                                    ? true
                                                    : false
                                            }
                                        />
                                    )
                                }
                            )}
                        </MenuBody>
                    </MenuContainer>
                )}
            </IpadAndMobileDisplay>
        )
    }
}

export default withRouter(MainMenuMobile)
