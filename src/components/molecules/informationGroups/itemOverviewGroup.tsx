import * as React from 'react'
import styled from 'styled-components'
import { CategoryItem } from 'types'

import FullWidthImageMobile from '../../atoms/images/fullWidthImageMobile'
import EmbedPlayerMobile from '../../atoms/trackPlayer/embedPlayerMobile'
import ItemInfoRow from '../rows/itemInfoRow'

const AssetPadding = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`

const Wrapper = styled.div`
    padding-top: 40px;
`

type Props = {
    item: CategoryItem
}

const ItemOverviewGroup: React.FunctionComponent<Props> = (props) => {
    let item = props.item
    return (
        <Wrapper>
            <ItemInfoRow />
            {item.img_url && (
                <AssetPadding>
                    <FullWidthImageMobile img_url={item.img_url} />
                </AssetPadding>
            )}

            {item.embed_url && (
                <AssetPadding>
                    <EmbedPlayerMobile
                        title={item.title}
                        embed_url={item.embed_url}
                    />
                </AssetPadding>
            )}
        </Wrapper>
    )
}
export default ItemOverviewGroup
