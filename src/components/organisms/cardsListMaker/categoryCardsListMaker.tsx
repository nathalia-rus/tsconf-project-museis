import * as React from 'react'
import { CategoryItem } from 'reducer-types'
import CardWrapper from '../../atoms/cardWrapper/cardWrapper'
import FullWidthImageMobile from '../../atoms/images/fullWidthImageMobile'
import EmbedPlayerMobile from '../../atoms/trackPlayer/embedPlayerMobile'
import ThinCardSeparatorLine from '../../atoms/separators/thinCardSeparatorLine'
import ItemInfoRow from '../../molecules/rows/itemInfoRow'
import TagsRow from '../../molecules/rows/tagsRow'

import { EnumCategory } from '../../types/enums'

type Props = {
    data: any
    listID: string[]
    category: EnumCategory
}

class CategoryCardsListMaker extends React.Component<Props, {}> {
    generateCardBody = (item: CategoryItem, category: EnumCategory) => {
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
                <CardWrapper key={index}>
                    <ItemInfoRow />
                    {this.generateCardBody(item, props.category)}
                    <TagsRow />
                </CardWrapper>
            )
        })
    }
}

export default CategoryCardsListMaker
