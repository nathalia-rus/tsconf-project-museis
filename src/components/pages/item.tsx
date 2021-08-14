import React from 'react'

import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { BodySectionID } from 'reducer-types'
import { CategoryItem } from 'types'

import { RootState } from 'typesafe-actions'
import { Category, OBtn } from '../../global/o'
import Button from '../atoms/buttons'

import ItemInfoRow from '..//molecules/rows/itemInfoRow'
import TagsRow from '../molecules/rows/tagsRow'
import ItemBodyMaker from '../organisms/itemBodyMaker/itemBodyMaker'
import MainContainer from '../templates/containers/pageContainers/mainContainer'
import MobileMainPadding from '../templates/containers/bodyContainers/mobileDefaultPadding'

interface Props extends RouteComponentProps<any> {
    categoriesData: any
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

        let categoryData = props.categoriesData[categoryID]

        let item: CategoryItem | undefined =
            categoryData && categoryData.data[itemID]

        return (
            <MainContainer>
                <MobileMainPadding>
                    {item && (
                        <div style={{ paddingTop: '50px' }}>
                            <ItemInfoRow />
                            <ItemBodyMaker
                                item={item}
                                sectionsListID={props.sectionsListID}
                            />
                            <TagsRow />
                        </div>
                    )}
                </MobileMainPadding>
                <Button
                    btn={OBtn.Close}
                    onClick={() => this.props.history.push('/literature')}
                />
            </MainContainer>
        )
    }
}

export default withRouter(connect(mapStateToProps, {})(Item))
