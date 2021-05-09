import * as React from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
    position: absolute;
    align-items: center;
    justify-content: center;
`

const PaginationTextStyled = styled.div`
    color: #2a979a;
    font-family: Cinzel;
`

export interface IPaginationMenuProps {
    goUp: any
    goDown: any
    paginationtext?: any
    down: boolean
    up: boolean
}

const MainPaginatorDefault: React.SFC<IPaginationMenuProps> = (props) => (
    <MenuContainer id="paginator">
        <PaginationTextStyled>{props.paginationtext}</PaginationTextStyled>

        <div
            style={{
                opacity: props.up === true ? '1' : '0.3',
                pointerEvents: props.up === true ? 'auto' : 'none',
            }}
        >
            {/* orientation="up" */}
            <button onClick={props.goUp}>UP</button>
        </div>

        <button onClick={props.goUp}>DOWN</button>
    </MenuContainer>
)

export default MainPaginatorDefault
