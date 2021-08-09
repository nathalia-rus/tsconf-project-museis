import * as React from 'react'

import { EnumBtn } from '../../types/enums'
import NakedBtn from './nakedBtn'
import PrimaryBtn from './primaryBtn'

export type BtnProps = {
    children?: React.ReactNode
    btn: EnumBtn
    active?: boolean
    height?: string
    width?: string
}

class Button extends React.Component<BtnProps, {}> {
    renderIcon(props: BtnProps) {
        switch (props.btn) {
            case EnumBtn.Primary:
                return <PrimaryBtn {...props} />

            case EnumBtn.Naked:
                return <NakedBtn {...props} />

            default:
                console.log('please chose an icon')
        }
    }
    render() {
        return this.renderIcon(this.props)
    }
}

export default Button