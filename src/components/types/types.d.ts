declare module 'types' {
    import { EnumNavigation } from './enums'

    export type MenuItem = {
        name: string
        path: string
        id: EnumNavigation
    }

    export type BtnProps = {
        children?: React.ReactNode
        btn: EnumBtn
        active?: boolean
        height?: string
        width?: string
    }
}
