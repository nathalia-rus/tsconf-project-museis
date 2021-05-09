import * as React from 'react'
import styled from 'styled-components'
import * as StatefulIcons from '../statefulIcons'

const MenuContainer = styled.div`
    position: absolute;
    top: 0px;
    bottom: 26px;
    right: 35px;

    padding-top: 50px;
    padding-bottom: 50px;
    width: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const DotsCol = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
`

const PaginationTextStyled = styled.div`
    color: #8a8a8a;
    font-family: Antonio-Regular;
    width: 200px;
    font-size: 14px;
    text-align: center;
    transform: rotate(90deg);
    letter-spacing: 9px;
`

export interface IPaginationMenuProps {
    goUp: any
    goDown: any
    paginationtext?: any
    down: boolean
    up: boolean
}

const MainThemePaginatorMenu: React.SFC<IPaginationMenuProps> = (props) => (
    <MenuContainer id="paginator">
        <DotsCol>
            <StatefulIcons.MainThemePaginatorDotIcon
                height="26"
                width="26"
                isActive={true}
            />
            <StatefulIcons.MainThemePaginatorDotIcon
                height="26"
                width="26"
                isActive={false}
            />
            <StatefulIcons.MainThemePaginatorDotIcon
                height="26"
                width="26"
                isActive={false}
            />
            <StatefulIcons.MainThemePaginatorDotIcon
                height="26"
                width="26"
                isActive={false}
            />
        </DotsCol>

        <PaginationTextStyled>gods edition</PaginationTextStyled>

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

export default MainThemePaginatorMenu
