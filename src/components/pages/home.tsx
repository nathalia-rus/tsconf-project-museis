import React from 'react'

import { connect } from 'react-redux'
import { CategoriesReducerType, CategoryItemData } from 'reducer-types'
import { RootState } from 'typesafe-actions'
import MobileSectionNavCTA from '../atoms/sectionCTA/mobileSectionNavCTA'
import HomeHeader from '../atoms/typography/homeHeader'

import CategoryCardsListMaker from '../organisms/cardsListMaker/categoryCardsListMaker'

import GreyContainer from '../templates/containers/bodyContainers/greyContainer'
import MainContainer from '../templates/containers/pageContainers/mainContainer'
import { EnumCategory } from '../types/enums'

type Props = {
    categories: CategoriesReducerType | null
}

const mapStateToProps = (state: RootState) => {
    return {
        categories: state.categories,
    }
}

class Home extends React.Component<Props> {
    componentDidMount() {}
    render() {
        let enumsList: EnumCategory[] = [
            EnumCategory.Literature,
            EnumCategory.Paintings,
            EnumCategory.ClassicalMusic,
            EnumCategory.Sculptures,
        ]

        return (
            <MainContainer>
                <HomeHeader />
                <GreyContainer>
                    {enumsList.map((id: EnumCategory, index: number) => {
                        let category: CategoryItemData | null =
                            this.props.categories !== null &&
                            this.props.categories.data &&
                            this.props.categories.data[id]
                                ? this.props.categories.data[id]
                                : null

                        if (category) {
                            return (
                                <>
                                    <CategoryCardsListMaker
                                        data={category.data}
                                        listID={category.listID.slice(0, 2)}
                                        category={id}
                                        key={index}
                                    />

                                    <MobileSectionNavCTA path={''} />
                                </>
                            )
                        } else return <div key={index} />
                    })}
                </GreyContainer>
            </MainContainer>
        )
    }
}

export default connect(mapStateToProps, {})(Home)
