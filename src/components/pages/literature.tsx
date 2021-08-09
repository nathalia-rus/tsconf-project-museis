import React from 'react'

import { connect } from 'react-redux'
import { CategoriesReducerType, CategoryItemData } from 'reducer-types'
import { RootState } from 'typesafe-actions'
import CategoryCardsList from '../organisms/cardsList/categoryCardsList'

import GreyWrapper from '../templates/pageWrappers/greyWrapper'
import MainPageWrapper from '../templates/pageWrappers/mainPageWrapper'
import { EnumCategory } from '../types/enums'

type Props = {
    categories: CategoriesReducerType | null
}

const mapStateToProps = (state: RootState) => {
    return {
        categories: state.categories,
    }
}

class Literature extends React.Component<Props> {
    componentDidMount() {}
    render() {
        let category_literature: CategoryItemData | null =
            this.props.categories !== null &&
            this.props.categories.data &&
            this.props.categories.data[EnumCategory.Literature]
                ? this.props.categories.data[EnumCategory.Literature]
                : null
        return (
            <MainPageWrapper>
                <GreyWrapper>
                    {category_literature !== null && (
                        <CategoryCardsList
                            data={category_literature.data}
                            listID={category_literature.listID}
                            category={EnumCategory.Literature}
                        />
                    )}
                </GreyWrapper>
            </MainPageWrapper>
        )
    }
}

export default connect(mapStateToProps, {})(Literature)
