import * as React from 'react'
import { CategoryItem } from 'reducer-types'

import FullWidthImageMobile from '../../atoms/images/fullWidthImageMobile'
import EmbedPlayerMobile from '../../atoms/players/embedPlayerMobile'
import ThinCardSeparatorLine from '../../atoms/separators/thinCardSeparatorLine'
import ItemInfoHeader from '../../molecules/itemInfoHeader'

import { EnumCategory } from '../../types/enums'

type Props = {
    data: any
    listID: string[]
    category: EnumCategory
}

class FormMakerMobile extends React.Component<Props, {}> {
    generateFormBody = (item: CategoryItem, category: EnumCategory) => {
        switch (category) {
            case EnumCategory.Literature:
                return <ThinCardSeparatorLine />

            case EnumCategory.Paintings:
                return (
                    <FullWidthImageMobile
                        height="180px"
                        img_url={item.img_url}
                    />
                )

            case EnumCategory.Sculptures:
                return (
                    <FullWidthImageMobile
                        height="180px"
                        img_url={item.img_url}
                    />
                )

            case EnumCategory.ClassicalMusic:
                return (
                    <EmbedPlayerMobile
                        title={item.title}
                        embed_url={item.embed_url}
                    />
                )

            default:
                return <div />
        }
    }

    render() {
        const { ...props } = this.props
        return props.listID.map((id: string, index: number) => {
            let item: CategoryItem = props.data[id]

            return (
                <div>
                    <ItemInfoHeader />
                    {this.generateFormBody(item, props.category)}
                    <div>button here hi </div>
                </div>
            )
        })
    }
}

export default FormMakerMobile
