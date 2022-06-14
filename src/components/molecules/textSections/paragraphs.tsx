import { BodySectionID } from 'reducer-types'
import { CategoryItem } from 'types'
import Paragraph from '../../atoms/typography/paragraph'

type Props = {
    item: CategoryItem
    bodySectionID: BodySectionID
}

export function BodyParagraphs(props: Props) {
    return (
        <>
            {props.item.body[props.bodySectionID].map(
                (sectionContent: string, index: number) => {
                    return <Paragraph>{sectionContent}</Paragraph>
                }
            )}
        </>
    )
}
