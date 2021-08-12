import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { OBtn } from '../../../global/o'

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
          <Link to={props.path} >
            <Button onClick={() => 'func'} btn={OBtn.Primary}>
                discover more
            </Button>
            </Link>
        </SectionEndPadding>
    )
}
export default MobileSectionNavCTA
