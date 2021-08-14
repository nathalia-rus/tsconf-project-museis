import React from 'react'

import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { CategoriesReducerType, CategoryItemData } from 'reducer-types'
import { RootState } from 'typesafe-actions'
import { Category, OCategory } from '../../global/o'
import Loader from '../atoms/loader/loader'
import MobileSectionNavCTA from '../atoms/sectionCTA/mobileSectionNavCTA'
import HomeHeader from '../atoms/typography/homeHeader'
import SectionHeader from '../atoms/typography/sectionHeader'

import CategoryCardsListMaker from '../organisms/listMaker/categoryCardsListMaker'

import GreyContainer from '../templates/containers/bodyContainers/greyContainer'
import MobileDefaultPadding from '../templates/containers/bodyContainers/mobileDefaultPadding'
import MainContainer from '../templates/containers/pageContainers/mainContainer'

interface Props extends RouteComponentProps<any> {
    categories: CategoriesReducerType
}

const mapStateToProps = (state: RootState) => {
    return {
        categories: state.categories,
    }
}

class Home extends React.Component<Props> {
    componentDidMount() {
        let params = new URLSearchParams(this.props.location.search)
        let fl = params.get('fl')

        if (fl) {
            setTimeout(() => {
                return this.props.history.push('/')
            }, 1500)
            return
        }
    }

    render() {
        let categories = this.props.categories

        let oList: Category[] = [
            OCategory.Paintings,
            OCategory.ClassicalMusic,
            OCategory.Literature,
            OCategory.Sculptures,
        ]

        let params = new URLSearchParams(this.props.location.search)
        let fl = params.get('fl')

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
                                <div key={index}>
                                    <MobileDefaultPadding>
                                        <SectionHeader
                                            title={
                                                categories.categoriesDetail[id]
                                                    .name
                                            }
                                        />
                                    </MobileDefaultPadding>
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
                                </div>
                            )
                        } else return <div key={index} />
                    })}

                {fl && <Loader />}
            </MainContainer>
        )
    }
}

export default withRouter(connect(mapStateToProps, {})(Home))
