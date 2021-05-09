import * as React from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    align-items: center;
    justify-content: center;
    background-color: red;
    height: 300px;
    width: 300px;
`

const PaginationTextStyled = styled.div`
    color: pink;
    font-family: Antonio-Light;
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
        <PaginationTextStyled>hello</PaginationTextStyled>

        <div
            style={{
                opacity: props.up === true ? '1' : '0.3',
                pointerEvents: props.up === true ? 'auto' : 'none',
            }}
        >
            {/* orientation="up" */}
            <button onClick={props.goUp}>UP</button>
        </div>
        <div
            style={{
                opacity: props.down === true ? '1' : '0.3',
                pointerEvents: props.down === true ? 'auto' : 'none',
            }}
        >
            <button onClick={props.goUp}>DOWN</button>
        </div>
    </MenuContainer>
)

export default MainPaginatorDefault
