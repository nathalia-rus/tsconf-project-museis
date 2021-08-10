import { MenuItem } from 'types'
import { EnumNavigationItem } from '../../types/enums'

type MenuItemObj = {
    [key: string]: MenuItem
}

export const menuItemsObj: MenuItemObj = {
    [EnumNavigationItem.Home]: {
        name: 'home',
        path: '/',
        id: EnumNavigationItem.Home,
    },
    [EnumNavigationItem.Literature]: {
        name: 'literature',
        path: 'literature',
        id: EnumNavigationItem.Literature,
    },
    [EnumNavigationItem.Paintings]: {
        name: 'paintings',
        path: 'paintings',
        id: EnumNavigationItem.Paintings,
    },
    [EnumNavigationItem.ClassicalMusic]: {
        name: 'classical music',
        path: 'classical-music',
        id: EnumNavigationItem.ClassicalMusic,
    },
    [EnumNavigationItem.Sculptures]: {
        name: 'sculptures',
        path: 'sculptures',
        id: EnumNavigationItem.Sculptures,
    },
    [EnumNavigationItem.Questionnaire]: {
        name: 'Questionnaire',
        path: 'questionnaire?n=1',
        id: EnumNavigationItem.Questionnaire,
    },
    [EnumNavigationItem.Categories]: {
        name: 'Categories',
        path: '',
        id: EnumNavigationItem.Categories,
    },
}

export const menuItemsIDsListDesktop: string[] = [
    EnumNavigationItem.Home,
    EnumNavigationItem.Literature,
    EnumNavigationItem.Paintings,
    EnumNavigationItem.ClassicalMusic,
    EnumNavigationItem.Sculptures,
]

export const menuItemsIDsListMobile: string[] = [
    EnumNavigationItem.Home,
    EnumNavigationItem.Categories,
    EnumNavigationItem.Questionnaire,
]
