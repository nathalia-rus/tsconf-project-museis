import * as React from 'react'
import * as FormElements from '../../molecules/formElements'

import CenteredBodyMobile from '../../templates/containers/bodyContainers/centeredBodyMobile'

import { RouteComponentProps, withRouter } from 'react-router-dom'
import { OFormType } from '../../../global/o'
import FormNavigator from '../../molecules/formElements/formNavigator'
import { Question } from 'types'
import QuestionGroup from '../../molecules/questionGroup'

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
        let isLast =
            this.props.current_index === this.props.last_index ? true : false
        let n = this.props.current_index
        let url: string =
            val === 'previous'
                ? `/questionnaire?n=${n - 1}`
                : val === 'next' && !isLast
                ? `/questionnaire?n=${n + 1}`
                : `/`

        this.props.history.push(url)
    }

    render() {
        const { ...props } = this.props

        let isLast =
            this.props.current_index === this.props.last_index ? true : false
        let isFirst = this.props.current_index === 1 ? true : false

        return (
            <>
                <CenteredBodyMobile>
                    {/* QUESTION */}
                    <QuestionGroup
                        current_index={props.current_index}
                        last_index={props.last_index}
                        title={props.question.title}
                        img_url={props.question.img_url}
                    />
                    {/* FORM */}
                    {this.renderFormBody(props.question)}
                </CenteredBodyMobile>
                {/* NAVIGATOR */}
                <FormNavigator
                    goNext={() => this.navigate('next')}
                    goPrevious={() => this.navigate('previous')}
                    close={() => this.navigate('close')}
                    isLast={isLast}
                    isFirst={isFirst}
                />
            </>
        )
    }
}

export default withRouter(QuestionnaireFormMaker)
