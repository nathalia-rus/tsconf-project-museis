declare module 'types' {
    import { EnumNavigationItem } from './enums'
    export type MenuItem = {
        name: string
        path: string
        id: EnumNavigationItem
    }

    export type FormItem = {
        id: any
        value: string
    }

    // type FormElementType = 'radio' | 'checkbox' | 'rating'
}
