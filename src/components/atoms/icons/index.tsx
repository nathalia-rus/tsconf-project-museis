import * as React from 'react'
import museis_logo from '../../../assets/logos/museis_logo.svg'

export enum IconsEnum {
    'logo',
    'home',
    'double-arrows',
    'literature',
    'paintings',
    'classical-music',
    'sculptures',
    'something-else',
}

export enum IconDirectionEnum {
    'up',
    'down',
}

export type IconProps = {
    icon: IconsEnum
    orientation?: IconDirectionEnum
    active?: boolean
    color?: string
    height?: string
    width?: string
}

class Icon extends React.Component<IconProps, {}> {
    renderIcon(
        icon: IconsEnum,
        orientation?: IconDirectionEnum,
        active?: boolean
    ) {
        switch (icon) {
            case IconsEnum.logo:
                return (
                    <img
                        style={{
                            width: this.props.width ? this.props.width : '19px',
                            cursor: 'pointer',
                        }}
                        src={museis_logo}
                        alt="museis_logo"
                    />
                )

            default:
                console.log('please chose an icon')
        }
    }
    render() {
        return this.renderIcon(
            this.props.icon,
            this.props.orientation && this.props.orientation
        )
    }
}

export default Icon
