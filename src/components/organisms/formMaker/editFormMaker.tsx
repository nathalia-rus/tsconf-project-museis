import * as React from 'react'
import * as FormElements from '../../molecules/formElements'

import CenteredBodyMobile from '../../templates/containers/bodyContainers/centeredBodyMobile'

import QuestionNumber from '../../atoms/typography/questionNumber'
import Title from '../../atoms/typography/title'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { OFormType, OTypographyStyle } from '../../../global/o'
import FormNavigator from '../../molecules/formElements/formNavigator'
import { Question } from 'types'

interface Props extends RouteComponentProps<any> {
    question: Question
    current_index: number
    last_index: number
}

class EditFormMaker extends React.Component<Props, {}> {
    renderFormBody = (item: Question) => {
        switch (item.formType) {
            // see the type error here on passing somnething wrong:
            case OFormType.radio:
                return <FormElements.RadioGroup items={item.options} />

            case OFormType.checkbox:
                return <FormElements.CheckboxGroup items={item.options} />

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
                    isFirst={true}
                    isLast={true}
                />
            </>
        )
    }
}

export default withRouter(EditFormMaker)
