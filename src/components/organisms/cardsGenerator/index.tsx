import * as React from 'react'
import CardWrapper from '../../atoms/cardWrapper/cardWrapper'
import ThinCardSeparatorLine from '../../atoms/separators/thinCardSeparatorLine'
import ItemInfoHeader from '../../molecules/itemContentGroups/itemInfoHeader'
import TagsRow from '../../molecules/itemContentGroups/tagsRow'

type Props = {}

class CardsGenerator extends React.Component<Props, {}> {
    render() {
        return (
            <CardWrapper>
                <ItemInfoHeader />
                <ThinCardSeparatorLine />
                <TagsRow />
            </CardWrapper>
        )
    }
}

export default CardsGenerator
