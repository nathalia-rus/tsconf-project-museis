declare module 'types' {
    import { EnumNavigationItem } from './enums'
    export type MenuItem = {
        name: string
        path: string
        id: EnumNavigationItem
    }
}
