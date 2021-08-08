import React from 'react'

import { connect } from 'react-redux'
import { CategoriesReducerType } from 'reducer-types'
import { RootState } from 'typesafe-actions'
import MainPageWrapper from '../templates/pageWrappers/mainPageWrapper'
import { EnumCategory } from '../types/enums'

type Props = {
    categoriesData: any
}

const mapStateToProps = (state: RootState) => {
    return {
        categoriesData: state.categories.data,
    }
}

class Literature extends React.Component<Props> {
    componentDidMount() {}
    render() {
        let literatureData: CategoriesReducerType =
            this.props.categoriesData !== null &&
            this.props.categoriesData[EnumCategory.Literature]
                ? this.props.categoriesData[EnumCategory.Literature]
                : null
        return (
            <MainPageWrapper>
                {console.log(literatureData)}
                literature
            </MainPageWrapper>
        )
    }
}

export default connect(mapStateToProps, {})(Literature)
