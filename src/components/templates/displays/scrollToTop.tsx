import React, { useEffect, Fragment } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface Props extends RouteComponentProps<any>, React.Props<any> {
    children?: React.ReactNode
}

function ScrollToTop(props: Props) {
    useEffect(() => {
        const unlisten = props.history.listen(() => {
            window.scrollTo(0, 0)
        })
        return () => {
            unlisten()
        }
    })

    return <Fragment>{props.children}</Fragment>
}

export default withRouter(ScrollToTop)
