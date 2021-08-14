
import * as React from 'react'
import styled from 'styled-components'
import { OTypographyStyle } from '../../../global/o'
import FullWidthImageMobile from '../../atoms/images/fullWidthImageMobile'
import QuestionNumber from '../../atoms/typography/questionNumber'
import Title from '../../atoms/typography/title'


const PaddingImg = styled.div`
 padding-top: 50px;
 width: 100vw;
`

type Props = {
title: string 
current_index: number 
last_index: number 
img_url?: string
}

const QuestionGroup: React.FunctionComponent<Props> = (props) => {
    return (
<>
                  <QuestionNumber
                        total={props.last_index}
                        current={props.current_index}
                    />
                    <Title
                        typographyStyle={[
                            OTypographyStyle.Narrow,
                            OTypographyStyle.Center,
                        ]}
                    >
                        {props.title}

                    </Title>
 { props.img_url && <PaddingImg><FullWidthImageMobile hasNoBorderRadius={true} img_url={props.img_url} /></PaddingImg>
   }
</>
    )
}
export default QuestionGroup
