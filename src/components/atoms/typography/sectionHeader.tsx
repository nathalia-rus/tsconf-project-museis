import * as React from 'react'
import styled from 'styled-components'
import sectionHeader from '../../../assets/mockAssets/toDeleteEventually/sectionHeader.svg'
import { device } from '../../templates/devices/devices'

const Padding = styled.div`
    padding-left: 30px;
    padding-bottom: 30px;

    @media ${device.large_desktop} {
    }
`

const Img = styled.img`
    width: 60vw;

    @media ${device.large_desktop} {
    }
`

type Props = {
    children?: React.ReactNode
}

class SectionHeader extends React.Component<Props, {}> {
    render() {
        return (
            <Padding>
                <Img alt="section header" src={sectionHeader} />
            </Padding>
        )
    }
}

export default SectionHeader
