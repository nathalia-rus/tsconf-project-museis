import * as React from 'react'

import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Question } from '../../../global/o'

interface Props extends RouteComponentProps<any> {
    question: Question
}

class CategoryViewManagerDesktop extends React.Component<Props, {}> {
    renderFormBody = (item: Question) => {
        switch (item.formType) {
            default:
                return undefined
        }
    }

    render() {
        const { ...props } = this.props

        return <>{this.renderFormBody(props.question)}</>
    }
}

export default withRouter(CategoryViewManagerDesktop)
