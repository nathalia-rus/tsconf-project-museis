declare module 'types' {
    export type MenuItem = {
        name: string
        path: string
    }

    export type BtnProps = {
        children?: React.ReactNode
        btn: EnumBtn
        active?: boolean
        height?: string
        width?: string
    }
}
