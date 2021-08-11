declare module 'types' {
    import { NavigationItem } from './o'

    export type MenuItem = {
        name: string
        path: string
        id: NavigationItem
    }

    export type FormItem = {
        id: any
        value: string
    }
}
