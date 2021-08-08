import * as React from 'react'
import styled from 'styled-components'

interface IStyle {
    isActive: boolean
}

const MenuItem = styled.div<IStyle>``

interface Props {}

const DesktopMenuItem: React.FunctionComponent<Props> = (props) => {
    return <MenuItem isActive={false}> menu Item </MenuItem>
}
export default DesktopMenuItem
