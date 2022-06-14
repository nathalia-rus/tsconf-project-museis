import * as React from 'react'
import styled from 'styled-components'

import museis_logo from '../../../assets/logos/museis_logo.svg'
import category from '../../../assets/nav/category.svg'
import home from '../../../assets/nav/home.svg'
import questionnaire from '../../../assets/nav/questionnaire.svg'
import close from '../../../assets/icons/close.svg'
import double_arrows from '../../../assets/icons/double_arrows.svg'
import favourites from '../../../assets/nav/favourites.svg'
import favourite from '../../../assets/icons/favourite.svg'
import {
    NavigationItem,
    Category,
    MyIcon,
    Orientation,
    OIcon,
} from '../../../global/o'

export type Icons = MyIcon | Category | NavigationItem

export type IconProps = {
    icon: Icons
    orientation?: Orientation
    active?: boolean
    color?: string
    height?: string
    width?: string
}

const IconStyle = styled.img<IconProps>`
    width: ${(props) => (props.width ? props.width : '20px')};
    height: ${(props) => (props.height ? props.height : '20px')};
    cursor: 'pointer';
`

export function Icon(props: IconProps) {
    let renderIcon = React.useCallback(() => {
        switch (props.icon) {
            case 'logo':
                return (
                    <IconStyle {...props} src={museis_logo} alt="museis logo" />
                )

            case 'favourites':
                return (
                    <IconStyle {...props} src={favourites} alt="favourites" />
                )
            case 'home':
                return <IconStyle {...props} src={home} alt="home" />

            case OIcon.Favourite:
                return <IconStyle {...props} src={favourite} alt="favourite" />

            case OIcon.Close:
                return <IconStyle {...props} src={close} alt="close" />

            case OIcon.DoubleArrows:
                return <IconStyle {...props} src={double_arrows} alt="close" />

            case 'categories':
                return <IconStyle {...props} src={category} alt="categories" />

            case 'questionnaire':
                return (
                    <IconStyle
                        {...props}
                        src={questionnaire}
                        alt="questionnaire"
                    />
                )

            default:
                return <>hello</>
        }
    }, [props])

    return renderIcon()
}

export default Icon
