import * as React from 'react'
import styled from 'styled-components'
import { CategoryItem } from 'types'
import Author from '../../atoms/typography/author'
import LocationAndDate from '../../atoms/typography/locationAndDate'
import Title from '../../atoms/typography/title'

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

const RowLine = styled.div`
    width: 1px;
    height: 20px;
    background-color: #c7c796;
    margin-left: 10px;
    margin-right: 10px;
`

const SmallPadding = styled.div`
    padding-bottom: 5px;
`

const Padding = styled.div`
    padding-bottom: 20px;
`

type Props = { item: CategoryItem }

class ItemInfoRow extends React.Component<Props, {}> {
    render() {
        let item = this.props.item
        return (
            <>
                <Title>{item.title}</Title>
                <SmallPadding />
                <Row>
                    <Author>{item.author}</Author>
                    <RowLine />
                    <LocationAndDate
                        date={item.year.toString()}
                        location={item.country}
                    />
                </Row>
                <Padding />
            </>
        )
    }
}

export default ItemInfoRow
