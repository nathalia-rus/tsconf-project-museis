import React from 'react'

import { connect } from 'react-redux'
import { CategoriesReducerType } from 'reducer-types'
import MainPageWrapper from '../templates/pageWrappers/mainPageWrapper'

type Props = {
    categoriesData: CategoriesReducerType
}

const mapStateToProps = (state: any) => {
    return { categories: state.categories }
}

class Home extends React.Component<Props> {
    componentDidMount() {}
    render() {
        let { ...props } = this.props

        return (
            <MainPageWrapper>
                {console.log(props)}
                hello
            </MainPageWrapper>
        )
    }
}

export default connect(mapStateToProps, {})(Home)
