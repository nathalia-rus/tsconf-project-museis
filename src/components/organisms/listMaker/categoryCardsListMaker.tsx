import * as React from 'react'
import { CategoryItem } from 'types'

import FullWidthImageMobile from '../../atoms/images/fullWidthImageMobile'
import EmbedPlayerMobile from '../../atoms/trackPlayer/embedPlayerMobile'
import ThinCardSeparatorLine from '../../atoms/separators/thinCardSeparatorLine'
import ItemInfoRow from '../../molecules/informationGroups/itemInfoRow'
import TagsRow from '../../molecules/rows/tagsRow'
import { Category, OCategory } from '../../../global/o'
import Card from '../../templates/containers/card/'

type Props = {
    data: any
    listID: string[]
    category: Category
}

class CategoryCardsListMaker extends React.Component<Props, {}> {
    generateCardBody = (item: CategoryItem, category: Category) => {
        switch (category) {
            case OCategory.Literature:
                return <ThinCardSeparatorLine />

            case OCategory.Paintings:
                return (
                    <FullWidthImageMobile
                        height="180px"
                        img_url={item.img_url}
                    />
                )

            case OCategory.Sculptures:
                return (
                    <FullWidthImageMobile
                        height="180px"
                        img_url={item.img_url}
                    />
                )

            case OCategory.ClassicalMusic:
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
            let category: Category = props.category

            if (item) {
                return (
                    <Card path={`/${category}/${item.id}`} key={index}>
                        <ItemInfoRow item={item} />
                        {this.generateCardBody(item, category)}
                        <TagsRow ids={item.tags} max={2} />
                    </Card>
                )
            } else return undefined
        })
    }
}

export default CategoryCardsListMaker
