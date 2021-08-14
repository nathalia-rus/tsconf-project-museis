import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { RootState } from 'typesafe-actions'
import { device } from '../../devices/devices'

function mapStateToProps(state: RootState) {
    return {}
}

interface Props {
    children?: React.ReactNode
}

interface Istyle {
    isCollapsed: boolean
}

const PageWrapper = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    z-index: 0;

    @media ${device.mobile_and_ipad} {
        justify-content: flex-start;
        width: 100%;
        padding-bottom: 100px;
    }

    @media ${device.beyond_ipad_mobile} {
        width: 60vw;
        justify-content: center;
        align-items: center;
        padding-top: 76px;
        transition: all 100ms;
        max-width: 1400px;
        padding-bottom: 200px;
    }

    @media ${device.smallest_laptops} {
        width: 70vw;
    }
`

const MenuAdjust = styled.div<Istyle>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media ${device.mobile_and_ipad} {
        width: 100%;
    }

    @media ${device.beyond_ipad_mobile} {
        padding-left: 160px;

        @media ${device.smallest_laptops} {
            padding-left: 130px;
        }
    }
`

const MainContainer: React.SFC<Props> = (props) => (
    <MenuAdjust isCollapsed={false}>
        <PageWrapper>{props.children}</PageWrapper>
    </MenuAdjust>
)

export default connect(mapStateToProps, {})(MainContainer)
