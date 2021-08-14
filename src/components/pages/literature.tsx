import React from 'react'

import { connect } from 'react-redux'
import { CategoriesReducerType, CategoryItemData } from 'reducer-types'
import { RootState } from 'typesafe-actions'
import { OCategory } from '../../global/o'
import SectionHeader from '../atoms/typography/sectionHeader'
import CategoryCardsListMaker from '../organisms/listMaker/categoryCardsListMaker'

import GreyContainer from '../templates/containers/bodyContainers/greyContainer'
import MainContainer from '../templates/containers/pageContainers/mainContainer'

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
        let categories = this.props.categories
        let category_literature: CategoryItemData | null =
            categories &&
            categories.data &&
            categories.data[OCategory.Literature]
                ? categories.data[OCategory.Literature]
                : null
        return (
            <MainContainer>
                <GreyContainer>
                    {categories && category_literature && (
                        <>
                            <SectionHeader
                                title={
                                    categories.categoriesDetail[
                                        OCategory.Literature
                                    ].name
                                }
                            />

                            <CategoryCardsListMaker
                                data={category_literature.data}
                                listID={category_literature.listID}
                                category={OCategory.Literature}
                            />
                        </>
                    )}
                </GreyContainer>
            </MainContainer>
        )
    }
}

export default connect(mapStateToProps, {})(Literature)
