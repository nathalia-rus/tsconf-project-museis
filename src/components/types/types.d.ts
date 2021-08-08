declare module 'types' {
    import { EnumNavigationItem } from './enums'

    export type MenuItem = {
        name: string
        path: string
        id: EnumNavigationItem
    }

    export type BtnProps = {
        children?: React.ReactNode
        btn: EnumBtn
        active?: boolean
        height?: string
        width?: string
    }
}
