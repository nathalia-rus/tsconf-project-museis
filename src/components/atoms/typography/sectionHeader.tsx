import * as React from 'react'
import styled from 'styled-components'

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding-bottom: 30px;
    padding-top: 30px;
`

const SectionTitle = styled.div`
    font-family: 'Roboto-Medium';
    font-size: 14px;
    text-transform: uppercase;
    width: auto;
    text-align: left;
`

const Line = styled.div`
    height: 1px;
    background-color: black;
    width: 100%;
`

const Padding = styled.div`
    padding-left: 15px;
`

type Props = {
    title: string
}

class SectionHeader extends React.Component<Props, {}> {
    render() {
        return (
            <Row>
                <SectionTitle>{this.props.title}</SectionTitle>
                <Padding />
                <Line />
            </Row>
        )
    }
}

export default SectionHeader
