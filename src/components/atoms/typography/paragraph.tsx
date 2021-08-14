import * as React from 'react'
import styled from 'styled-components'

const ParagraphStyle = styled.div`
    font-family: 'Roboto-Light';
    font-size: 14px;
    padding-bottom: 10px;
    text-align: left;
    padding-bottom: 10px;
    width: 100%;
`
type Props = {
    children: React.ReactNode
}
const Paragraph: React.FunctionComponent<Props> = (props) => {
    return <ParagraphStyle>{props.children}</ParagraphStyle>
}
export default Paragraph
