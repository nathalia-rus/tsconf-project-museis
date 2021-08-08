import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { CategoriesReducerType } from 'reducer-types'

const PageWrapper = styled.div``

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
            <>
                <PageWrapper>
                    {console.log(props.categoriesData)}
                    hello
                </PageWrapper>
            </>
        )
    }
}

export default connect(mapStateToProps, {})(Home)
