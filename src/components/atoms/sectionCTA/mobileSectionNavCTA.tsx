import * as React from 'react'
import styled from 'styled-components'
import { OBtn } from 'types'
import Button from '../buttons'

const SectionEndPadding = styled.div`
    padding-top: 15px;
    padding-bottom: 50px;
`

type Props = {
    path: string
}

const MobileSectionNavCTA: React.FunctionComponent<Props> = (props) => {
    return (
        <SectionEndPadding>
            <Button btn={OBtn.Primary}>discover more</Button>
        </SectionEndPadding>
    )
}
export default MobileSectionNavCTA
