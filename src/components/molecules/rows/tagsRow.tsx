import * as React from 'react'
import styled from 'styled-components'
import { OBtn } from '../../../global/o'
import { mockTagsData } from '../../../redux/tags/mockTagsData'
import Button from '../../atoms/buttons'

import Tag from '../../atoms/tags'

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 10px;
`
const Padding = styled.div`
    padding-bottom: 15px;
`
const SidePadding = styled.div`
    padding-left: 15px;
`
type Props = {
    ids: string[]
    max?: number
}

class TagsRow extends React.Component<Props, {}> {
    render() {
        let { ...props } = this.props
        return (
            <>
                <Padding />
                <Row>
                    {props.ids.map((tagID: string, index: number) => {
                        if (props.max && index > props.max - 1) {
                            return null
                        } else
                            return (
                                <Tag key={index}>
                                    {mockTagsData[tagID].name}
                                </Tag>
                            )
                    })}

                    {props.max && (
                        <>
                            <SidePadding />
                            <Button
                                btn={OBtn.Naked}
                                onClick={() => console.log('action')}
                            >
                                + {props.ids.length - props.max}
                            </Button>
                        </>
                    )}
                </Row>
            </>
        )
    }
}

export default TagsRow
