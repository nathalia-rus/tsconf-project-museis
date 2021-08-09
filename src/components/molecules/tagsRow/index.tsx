import * as React from 'react'
import styled from 'styled-components'

import Tag from '../../atoms/tags/tag'

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`
const Padding = styled.div`
    padding-bottom: 15px;
`
type Props = {}

let arr = ['philosophy', 'something-else']

class TagsRow extends React.Component<Props, {}> {
    render() {
        return (
            <>
                <Padding />
                <Row>
                    {arr.map((item: string, index: number) => {
                        return <Tag key={index}>{item}</Tag>
                    })}
                </Row>
            </>
        )
    }
}

export default TagsRow
