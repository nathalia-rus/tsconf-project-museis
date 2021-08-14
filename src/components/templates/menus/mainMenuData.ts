import { MenuItem } from 'types'
import { NavigationItem, ONavigationItem } from '../../../global/o'

type MenuItemObj = {
    [key: string]: MenuItem
}

export const menuItemsObj: MenuItemObj = {
    [ONavigationItem.Home]: {
        name: 'home',
        path: '/',
        id: ONavigationItem.Home,
    },
    [ONavigationItem.Literature]: {
        name: 'literature',
        path: 'literature',
        id: ONavigationItem.Literature,
    },
    [ONavigationItem.Paintings]: {
        name: 'paintings',
        path: 'paintings',
        id: ONavigationItem.Paintings,
    },
    [ONavigationItem.ClassicalMusic]: {
        name: 'classical music',
        path: 'classical-music',
        id: ONavigationItem.ClassicalMusic,
    },
    [ONavigationItem.Sculptures]: {
        name: 'sculptures',
        path: 'sculptures',
        id: ONavigationItem.Sculptures,
    },
    [ONavigationItem.Questionnaire]: {
        name: 'Questionnaire',
        path: 'questionnaire?n=1',
        id: ONavigationItem.Questionnaire,
    },
    [ONavigationItem.Categories]: {
        name: 'Categories',
        path: '',
        id: ONavigationItem.Categories,
    },
    [ONavigationItem.Favourites]: {
        name: 'favourites',
        path: '/favourites',
        id: ONavigationItem.Favourites,
    },
}

export const menuItemsIDsListDesktop: NavigationItem[] = [
    ONavigationItem.Home,
    ONavigationItem.Literature,
    ONavigationItem.Paintings,
    ONavigationItem.ClassicalMusic,
    ONavigationItem.Sculptures,
]

export const menuItemsIDsListMobile: NavigationItem[] = [
    ONavigationItem.Home,
    ONavigationItem.Categories,
    ONavigationItem.Favourites,
    ONavigationItem.Questionnaire,
]
