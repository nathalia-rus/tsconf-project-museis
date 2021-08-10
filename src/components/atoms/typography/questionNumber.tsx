import * as React from 'react'
import styled from 'styled-components'

const QuestionNumberStyle = styled.div`
    font-family: 'Roboto-Medium';
    font-size: 32px;
    color: rgba(199, 199, 150, 0.61);
    padding-bottom: 10px;
`
type Props = {
    current: number
    total: number
}
const QuestionNumber: React.FunctionComponent<Props> = (props) => {
    return (
        <QuestionNumberStyle>
            {props.current}/{props.total}
        </QuestionNumberStyle>
    )
}
export default QuestionNumber
