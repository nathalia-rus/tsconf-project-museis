import { MenuItem } from 'types'
import { EnumNavigation } from '../../../types/enums'

type MenuItemObj = {
    [key: string]: MenuItem
}

export const menuItemsObj: MenuItemObj = {
    [EnumNavigation.Home]: {
        name: 'home',
        path: 'home',
        id: EnumNavigation.Home,
    },
    [EnumNavigation.Literature]: {
        name: 'literature',
        path: 'literature',
        id: EnumNavigation.Literature,
    },
    [EnumNavigation.Paintings]: {
        name: 'paintings',
        path: 'paintings',
        id: EnumNavigation.Paintings,
    },
    [EnumNavigation.ClassicalMusic]: {
        name: 'classical music',
        path: 'classical-music',
        id: EnumNavigation.ClassicalMusic,
    },
    [EnumNavigation.Sculptures]: {
        name: 'sculptures',
        path: 'sculptures',
        id: EnumNavigation.Sculptures,
    },
    [EnumNavigation.Questionnaire]: {
        name: 'Questionnaire',
        path: 'questionnaire',
        id: EnumNavigation.Questionnaire,
    },
    [EnumNavigation.Categories]: {
        name: 'Categories',
        path: '',
        id: EnumNavigation.Categories,
    },
}

export const menuItemsIDsListDesktop: string[] = [
    EnumNavigation.Home,
    EnumNavigation.Literature,
    EnumNavigation.Paintings,
    EnumNavigation.ClassicalMusic,
    EnumNavigation.Sculptures,
]

export const menuItemsIDsListMobile: string[] = [
    EnumNavigation.Home,
    EnumNavigation.Categories,
    EnumNavigation.Questionnaire,
]
