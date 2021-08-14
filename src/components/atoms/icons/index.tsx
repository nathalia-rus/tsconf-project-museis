import * as React from 'react'
import styled from 'styled-components'

import museis_logo from '../../../assets/logos/museis_logo.svg'
import categories from '../../../assets/nav/categories.svg'
import home from '../../../assets/nav/home.svg'
import questionnaire from '../../../assets/nav/questionnaire.svg'
import close from '../../../assets/icons/close.svg'
import {
    NavigationItem,
    Category,
    MyIcon,
    Orientation,
} from '../../../global/o'

export type IconProps = {
    icon: MyIcon | Category | NavigationItem
    orientation?: Orientation
    active?: boolean
    color?: string
    height?: string
    width?: string
}

const IconStyled = styled.img<IconProps>`
    width: ${(props) => (props.width ? props.width : '20px')};
    height: ${(props) => (props.height ? props.height : '20px')};
    cursor: 'pointer';
`

class Icon extends React.Component<IconProps, {}> {
    renderIcon(props: IconProps) {
        switch (props.icon) {
            case 'logo':
                return (
                    <IconStyled
                        {...props}
                        src={museis_logo}
                        alt="museis logo"
                    />
                )

            case 'home':
                return <IconStyled {...props} src={home} alt="home" />

            case 'categories':
                return (
                    <IconStyled {...props} src={categories} alt="categories" />
                )

            case 'questionnaire':
                return (
                    <IconStyled
                        {...props}
                        src={questionnaire}
                        alt="questionnaire"
                    />
                )

            case 'close':
                return <IconStyled {...props} src={close} alt="close" />

            default:
                return <div>hello</div>
        }
    }
    render() {
        return this.renderIcon(this.props)
    }
}

export default Icon
