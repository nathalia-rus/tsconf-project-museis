import React from 'react'

import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { CategoryItemData } from 'reducer-types'
import { CategoryItem } from 'types'

import { RootState } from 'typesafe-actions'
import { OBtn, OCategory } from '../../../global/o'
import Button from '../../atoms/buttons'
import SectionHeader from '../../atoms/typography/sectionHeader'

import ItemInfoRow from '../../molecules/rows/itemInfoRow'
import TagsRow from '../../molecules/rows/tagsRow'
import MainContainer from '../../templates/containers/pageContainers/mainContainer'

interface Props extends RouteComponentProps<any> {
    literatudeData: CategoryItemData
}

const mapStateToProps = (state: RootState) => {
    return {
        literatudeData: state.categories.data[OCategory.Literature],
    }
}

class LiteratureItem extends React.Component<Props> {
    componentDidMount() {}

    render() {
        let itemID = this.props.match.params.uid
        let item: CategoryItem | undefined =
            this.props.literatudeData.data[itemID]

        return (
            <MainContainer>
                {item && (
                    <>
                        <ItemInfoRow />

                        <SectionHeader title={'about'} />

                        <SectionHeader title={'quote'} />

                        <SectionHeader title={'author'} />

                        <TagsRow />

                        <Button btn={OBtn.Close} onClick={() => undefined} />
                    </>
                )}
            </MainContainer>
        )
    }
}

export default withRouter(connect(mapStateToProps, {})(LiteratureItem))
