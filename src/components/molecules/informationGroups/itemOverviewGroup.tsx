import * as React from 'react'
import styled from 'styled-components'
import { CategoryItem } from 'types'
import Button from '../../atoms/buttons'

import FullWidthImageMobile from '../../atoms/images/fullWidthImageMobile'
import EmbedPlayerMobile from '../../atoms/trackPlayer/embedPlayerMobile'
import ItemInfoRow from '../informationGroups/itemInfoRow'

const AssetPadding = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    padding-top: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`

type Props = {
    item: CategoryItem
}

const ItemOverviewGroup: React.FunctionComponent<Props> = (props) => {
    let item = props.item
    return (
        <Wrapper>
            <ItemInfoRow item={item} />

            <Button
                btn={'SET_FAVOURITE'}
                onClick={() => console.log('favourited action')}
            />

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
                        size="big"
                    />
                </AssetPadding>
            )}
        </Wrapper>
    )
}
export default ItemOverviewGroup
