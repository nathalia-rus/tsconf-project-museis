import React from 'react'

import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { BodySectionID, CategoryItemData } from 'reducer-types'
import { CategoryItem } from 'types'

import { RootState } from 'typesafe-actions'
import { Category, OBtn } from '../../global/o'
import Button from '../atoms/buttons'

import TagsRow from '../molecules/rows/tagsRow'
import ItemBodyMaker from '../organisms/itemBodyMaker/itemBodyMaker'

import MobileDefaultPadding from '../templates/containers/bodyContainers/mobileDefaultPadding'
import styled from 'styled-components'
import ItemOverviewGroup from '../molecules/informationGroups/itemOverviewGroup'
import MainContainer from '../templates/containers/pageContainers/mainContainer'

const Padding = styled.div`
    padding-top: 20px;
`

interface Props extends RouteComponentProps<any> {
    categoriesData: { [x: string]: CategoryItemData }
    sectionsListID: BodySectionID[]
}

const mapStateToProps = (state: RootState) => {
    return {
        categoriesData: state.categories.data,
        sectionsListID: state.categories.bodySectionsListID,
    }
}

class Item extends React.Component<Props> {
    componentDidMount() {}

    render() {
        let { ...props } = this.props
        let itemID = props.match.params.uid
        let categoryID: Category = props.match.params.categoryid
        let categoryData: CategoryItemData = props.categoriesData[categoryID]
        let item: CategoryItem | undefined =
            categoryData && categoryData.data[itemID]

        return (
            <MainContainer>
                <MobileDefaultPadding>
                    {item && (
                        <>
                            <ItemOverviewGroup item={item} />
                            <ItemBodyMaker
                                item={item}
                                sectionsListID={props.sectionsListID}
                            />
                            <Padding />
                            <TagsRow ids={item.tags} />
                        </>
                    )}
                    <Button
                        btn={OBtn.Close}
                        onClick={() => this.props.history.goBack()}
                    />
                </MobileDefaultPadding>
            </MainContainer>
        )
    }
}

export default withRouter(connect(mapStateToProps, {})(Item))
