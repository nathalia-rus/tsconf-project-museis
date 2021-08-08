import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { CategoriesReducerType } from 'reducer-types'
import { RootState } from 'typesafe-actions'
import { EnumCategory } from '../types/enums'

const PageWrapper = styled.div``

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
            <>
                <PageWrapper>
                    {console.log(literatureData)}
                    literature
                </PageWrapper>
            </>
        )
    }
}

export default connect(mapStateToProps, {})(Literature)
