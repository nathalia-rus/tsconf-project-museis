import * as React from 'react'
import styled from 'styled-components'
import ItemAuthor from '../../atoms/typography/itemAuthor'
import ItemSmallLocationDate from '../../atoms/typography/itemSmallLocationDate'
import ItemTitle from '../../atoms/typography/itemTitle'

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

type Props = {}

class ItemInfoHeader extends React.Component<Props, {}> {
    render() {
        return (
            <>
                <ItemTitle>The Art of War</ItemTitle>
                <div style={{ paddingBottom: '10px' }} />
                <Row>
                    <ItemAuthor>Sun Tzu</ItemAuthor>
                    <RowLine />
                    <ItemSmallLocationDate date={'1877'} location="Japan" />
                </Row>
                <div style={{ paddingBottom: '15px' }} />
            </>
        )
    }
}

export default ItemInfoHeader
