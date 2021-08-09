import * as React from 'react'
import styled from 'styled-components'

const Line = styled.div`
    width: 78vw;
    height: 1px;
    background-color: #eeeeee;
`

type Props = {}

class ThinCardSeparatorLine extends React.Component<Props, {}> {
    render() {
        return (
            <>
                <Line />
            </>
        )
    }
}

export default ThinCardSeparatorLine
