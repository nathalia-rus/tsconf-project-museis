import { OBtn } from 'o'
import * as React from 'react'

import CloseBtn from './closeBtn'
import NakedBtn from './nakedBtn'
import PrimaryBtn from './primaryBtn'

export type BtnProps = {
    children?: React.ReactNode
    btn: OBtn
    onClick?: any
    active?: boolean
    height?: string
    width?: string
}

class Button extends React.Component<BtnProps, {}> {
    renderIcon(props: BtnProps) {
        switch (props.btn) {
            case 'PRIMARY':
                return <PrimaryBtn {...props} />

            case 'NAKED':
                return <NakedBtn {...props} />

            case 'CLOSE':
                return <CloseBtn {...props} />

            default:
                console.log('please chose an icon')
        }
    }
    render() {
        return this.renderIcon(this.props)
    }
}

export default Button
