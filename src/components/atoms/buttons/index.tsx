import * as React from 'react'
import { BtnProps } from 'types'
import { EnumBtn } from '../../types/enums'
import NakedBtn from './nakedBtn'
import PrimaryBtn from './primaryBtn'

type Props = BtnProps

class Button extends React.Component<Props, {}> {
    renderIcon(props: Props) {
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
