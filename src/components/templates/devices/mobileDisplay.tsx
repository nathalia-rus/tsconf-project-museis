import './styles.css'

import * as React from 'react'
export interface GlobalLayoutProps {
    children?: React.ReactNode
}

const MobileDisplay: React.SFC<GlobalLayoutProps> = (props) => (
    <div className="mobile-displayed">{props.children}</div>
)
MobileDisplay.defaultProps = {
    children: null,
}
export default MobileDisplay
