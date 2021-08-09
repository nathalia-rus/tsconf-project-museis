import * as React from 'react'
import { CategoryItem } from 'reducer-types'
import CardWrapper from '../../atoms/cardWrapper/cardWrapper'
import ThinCardSeparatorLine from '../../atoms/separators/thinCardSeparatorLine'
import ItemInfoHeader from '../../molecules/itemContentGroups/itemInfoHeader'
import TagsRow from '../../molecules/itemContentGroups/tagsRow'
import { EnumCategory } from '../../types/enums'

type Props = {
    data: any
    listID: string[]
    category: EnumCategory
}

class CategoryCardsGenerator extends React.Component<Props, {}> {
    generateCardBody = (item: CategoryItem, category: EnumCategory) => {
        switch (category) {
            case EnumCategory.Literature:
                return <ThinCardSeparatorLine />
            default:
                return <div />
        }
    }

    render() {
        const { ...props } = this.props
        return props.listID.map((id: string, index: number) => {
            let item: CategoryItem = props.data[id]

            return (
                <CardWrapper>
                    <ItemInfoHeader />
                    {this.generateCardBody(item, props.category)} <TagsRow />
                </CardWrapper>
            )
        })
    }
}

export default CategoryCardsGenerator
