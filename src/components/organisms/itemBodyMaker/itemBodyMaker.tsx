import React from 'react'

import { RouteComponentProps, withRouter } from 'react-router-dom'
import { BodySectionID } from 'reducer-types'
import { CategoryItem } from 'types'

import Paragraph from '../../atoms/typography/paragraph'
import SectionHeader from '../../atoms/typography/sectionHeader'

interface Props extends RouteComponentProps<any> {
    item: CategoryItem
    sectionsListID: BodySectionID[]
}

class ItemBodyMaker extends React.Component<Props> {
    componentDidMount() {}

    renderParagraphs = (s: BodySectionID) =>
        this.props.item.body[s].map((sectionContent: string, index: any) => {
            return <Paragraph>{sectionContent}</Paragraph>
        })

    render() {
        let { ...props } = this.props

        return props.sectionsListID.map((s: BodySectionID, index: number) => {
            return (
                <>
                    <SectionHeader title={s} />
                    {this.renderParagraphs(s)}
                </>
            )
        })
    }
}

export default withRouter(ItemBodyMaker)
