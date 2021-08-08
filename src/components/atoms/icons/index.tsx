import * as React from 'react'

import museis_logo from '../../../assets/logos/museis_logo.svg'
import { EnumIcon, EnumOrientation } from '../../types/enums'

export type IconProps = {
    icon: EnumIcon
    orientation?: EnumOrientation
    active?: boolean
    color?: string
    height?: string
    width?: string
}

class Icon extends React.Component<IconProps, {}> {
    renderIcon(props: IconProps) {
        switch (props.icon) {
            case EnumIcon.Logo:
                return (
                    <img
                        style={{
                            width: props.width ? props.width : '20px',
                            height: props.height ? props.height : '20px',
                            cursor: 'pointer',
                        }}
                        src={museis_logo}
                        alt="museis logo"
                    />
                )

            default:
                console.log('please chose an icon')
        }
    }
    render() {
        return this.renderIcon(this.props)
    }
}

export default Icon
