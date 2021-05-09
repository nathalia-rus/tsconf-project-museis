import './styles.css'

import * as React from 'react'
export interface GlobalLayoutProps {
    children?: React.ReactNode
}

const DesktopDisplay: React.SFC<GlobalLayoutProps> = (props) => (
    <div className="desktop-displayed ipad-displayed">{props.children}</div>
)
DesktopDisplay.defaultProps = {
    children: null,
}
export default DesktopDisplay
