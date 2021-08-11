import * as React from 'react'
import { Question } from 'reducer-types'
import * as FormElements from '../../molecules/formBodyType'
import { OFormType, OTypographyStyle } from 'types'
import CenteredBodyMobile from '../../templates/containers/bodyContainers/centeredBodyMobile'

import FormNavigator from '../../molecules/navigators/formNavigator'
import QuestionNumber from '../../atoms/typography/questionNumber'
import Title from '../../atoms/typography/title'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface Props extends RouteComponentProps<any> {
    question: Question
    current_index: number
    last_index: number
}

class QuestionnaireFormMaker extends React.Component<Props, {}> {
    renderFormBody = (item: Question) => {
        switch (item.formType) {
            case OFormType.radio:
                return <FormElements.RadioGroup items={item.options} />

            case OFormType.checkbox:
                return <FormElements.CheckboxGroup items={item.options} />

            case OFormType.rating:
                return (
                    <FormElements.RatingGroup
                        ratingTheme={item.ratingType}
                        items={item.options}
                    />
                )

            default:
                return undefined
        }
    }

    navigate = (val: string) => {
        let n = this.props.current_index

        if (val === 'close') {
            this.props.history.push(`/`)
        }
        if (val === 'previous') {
            this.props.history.push(`/questionnaire?n=${n - 1}`)
        }
        if (val === 'next') {
            this.props.history.push(`/questionnaire?n=${n + 1}`)
        }
    }

    render() {
        const { ...props } = this.props

        return (
            <>
                <CenteredBodyMobile>
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
                        {props.question.title}
                    </Title>
                    {this.renderFormBody(props.question)}
                </CenteredBodyMobile>

                <FormNavigator
                    goNext={() => this.navigate('next')}
                    goPrevious={() => this.navigate('previous')}
                    close={() => this.navigate('close')}
                />
            </>
        )
    }
}

export default withRouter(QuestionnaireFormMaker)
