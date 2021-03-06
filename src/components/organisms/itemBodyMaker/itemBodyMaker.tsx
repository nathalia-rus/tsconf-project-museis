import React from 'react'

import { RouteComponentProps, withRouter } from 'react-router-dom'
import { BodySectionID } from 'reducer-types'
import { CategoryItem } from 'types'

import SectionHeader from '../../atoms/typography/sectionHeader'
import { BodyParagraphs } from '../../molecules/textSections/paragraphs'

interface Props extends RouteComponentProps {
    item: CategoryItem
    sectionsListID: BodySectionID[]
}

class ItemBodyMaker extends React.Component<Props> {
    render() {
        let { ...props } = this.props

        return props.sectionsListID.map((s: BodySectionID, index: number) => {
            return (
                <>
                    <SectionHeader title={s} />
                    <BodyParagraphs item={props.item} bodySectionID={s} />
                </>
            )
        })
    }
}

export default withRouter(ItemBodyMaker)
