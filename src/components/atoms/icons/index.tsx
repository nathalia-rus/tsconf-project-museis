import * as React from 'react'
import styled from 'styled-components'

import museis_logo from '../../../assets/logos/museis_logo.svg'
import category from '../../../assets/nav/category.svg'
import home from '../../../assets/nav/home.svg'
import questionnaire from '../../../assets/nav/questionnaire.svg'
import close from '../../../assets/icons/close.svg'

import favourites from '../../../assets/nav/favourites.svg'
import favourite from '../../../assets/icons/favourite.svg'
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

            case 'favourites':
                return (
                    <IconStyled {...props} src={favourites} alt="favourites" />
                )

            case 'favourite':
                return <IconStyled {...props} src={favourite} alt="favourite" />

            case 'categories':
                return <IconStyled {...props} src={category} alt="categories" />

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
