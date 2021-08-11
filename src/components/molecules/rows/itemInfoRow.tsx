import * as React from 'react'
import styled from 'styled-components'
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

const Padding = styled.div`
    padding-bottom: 13px;
`

type Props = {}

class ItemInfoRow extends React.Component<Props, {}> {
    render() {
        return (
            <>
                <Title>The Art of War</Title>
                <Padding />
                <Row>
                    <Author>Sun Tzu</Author>
                    <RowLine />
                    <LocationAndDate date={'1877'} location="Japan" />
                </Row>
                <Padding />
            </>
        )
    }
}

export default ItemInfoRow
