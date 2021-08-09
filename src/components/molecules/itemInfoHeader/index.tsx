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

type Props = {}

class ItemInfoHeader extends React.Component<Props, {}> {
    render() {
        return (
            <>
                <Title>The Art of War</Title>
                <div style={{ paddingBottom: '10px' }} />
                <Row>
                    <Author>Sun Tzu</Author>
                    <RowLine />
                    <LocationAndDate date={'1877'} location="Japan" />
                </Row>
                <div style={{ paddingBottom: '15px' }} />
            </>
        )
    }
}

export default ItemInfoHeader
