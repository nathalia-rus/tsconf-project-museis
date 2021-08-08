import { MenuItem } from 'types'

type MenuItemObj = {
    [key: string]: MenuItem
}

export const menuItemsObj: MenuItemObj = {
    home: {
        name: 'home',
        path: 'home',
    },
    literature: {
        name: 'literature',
        path: 'literature',
    },
    paintings: {
        name: 'paintings',
        path: 'paintings',
    },
    classicalmusic: {
        name: 'classical music',
        path: 'classical-music',
    },
    sculptures: {
        name: 'sculptures',
        path: 'sculptures',
    },
    questions: {
        name: 'questions',
        path: 'questions',
    },
}

export const categoriesListMobile: string[] = [
    'literature',
    'paintings',
    'classicalmusic',
    'sculptures',
]

export const menuItemsIDsListDesktop: string[] = [
    'home',
    'literature',
    'paintings',
    'classicalmusic',
    'sculptures',
]

export const menuItemsIDsListMobile: string[] = [
    'home',
    'categories',
    'questions',
]
