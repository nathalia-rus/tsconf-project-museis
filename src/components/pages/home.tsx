import React from 'react'

import { connect } from 'react-redux'
import { CategoriesReducerType, CategoryItemData } from 'reducer-types'
import { RootState } from 'typesafe-actions'
import { Category, OCategory } from '../../global/o'
import MobileSectionNavCTA from '../atoms/sectionCTA/mobileSectionNavCTA'
import HomeHeader from '../atoms/typography/homeHeader'
import SectionHeader from '../atoms/typography/sectionHeader'

import CategoryCardsListMaker from '../organisms/listMaker/categoryCardsListMaker'

import GreyContainer from '../templates/containers/bodyContainers/greyContainer'
import MainContainer from '../templates/containers/pageContainers/mainContainer'

type Props = {
    categories: CategoriesReducerType
}

const mapStateToProps = (state: RootState) => {
    return {
        categories: state.categories,
    }
}

class Home extends React.Component<Props> {
    componentDidMount() {}
    render() {
        let categories = this.props.categories

        let oList: Category[] = [
            OCategory.Literature,
            OCategory.Paintings,
            OCategory.ClassicalMusic,
            OCategory.Sculptures,
        ]

        return (
            <MainContainer>
                <HomeHeader />
                {categories &&
                    oList.map((id: Category, index: number) => {
                        let category: CategoryItemData | null =
                            categories !== null &&
                            categories.data &&
                            categories.data[id]
                                ? categories.data[id]
                                : null

                        if (category) {
                            return (
                                <React.Fragment key={index}>
                                    <SectionHeader
                                        title={
                                            categories.categoriesDetail[id].name
                                        }
                                    />
                                    <GreyContainer>
                                        <CategoryCardsListMaker
                                            data={category.data}
                                            listID={category.listID.slice(0, 2)}
                                            category={id}
                                        />
                                        <MobileSectionNavCTA
                                            path={`/${id.toLowerCase()}`}
                                        />
                                    </GreyContainer>
                                </React.Fragment>
                            )
                        } else return <div key={index} />
                    })}
            </MainContainer>
        )
    }
}

export default connect(mapStateToProps, {})(Home)
