import React from 'react'

import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { CategoryDetails, CategoryItemData } from 'reducer-types'
import { RootState } from 'typesafe-actions'
import { Category } from '../../global/o'
import SectionHeader from '../atoms/typography/sectionHeader'
import CategoryCardsListMaker from '../organisms/listMaker/categoryCardsListMaker'

import GreyContainer from '../templates/containers/bodyContainers/greyContainer'
import MobileDefaultPadding from '../templates/containers/bodyContainers/mobileDefaultPadding'
import MainContainer from '../templates/containers/pageContainers/mainContainer'

interface Props extends RouteComponentProps<any> {
    categoriesData: { [x: string]: CategoryItemData }
    categoriesInfo: CategoryDetails
}

const mapStateToProps = (state: RootState) => {
    return {
        categoriesData: state.categories.data,
        categoriesInfo: state.categories.categoriesDetail,
    }
}

class CategoryPage extends React.Component<Props> {
    componentDidMount() {}
    render() {
        let { ...props } = this.props
        let categoryID: Category | undefined = props.match.params.categoryid
        let category: CategoryItemData | undefined =
            categoryID && props.categoriesData[categoryID]

        return (
            <MainContainer>
                <GreyContainer>
                    {category && categoryID && (
                        <>
                            <MobileDefaultPadding>
                                <SectionHeader
                                    title={
                                        props.categoriesInfo[categoryID].name
                                    }
                                />
                            </MobileDefaultPadding>

                            <CategoryCardsListMaker
                                data={category.data}
                                listID={category.listID}
                                category={categoryID}
                            />
                        </>
                    )}
                </GreyContainer>
            </MainContainer>
        )
    }
}

export default withRouter(connect(mapStateToProps, {})(CategoryPage))
