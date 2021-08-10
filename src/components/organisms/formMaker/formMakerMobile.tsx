import * as React from 'react'
import { Question } from 'reducer-types'
import * as FormElements from '../../molecules/formElementGroups'
import { EnumFormType, EnumTypographyStyle } from '../../types/enums'
import CenteredBodyMobile from '../../templates/containers/bodyContainers/centeredBodyMobile'

import FormNavigator from '../../molecules/formElementGroups/formNavigator'
import QuestionNumber from '../../atoms/typography/questionNumber'
import Title from '../../atoms/typography/title'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface Props extends RouteComponentProps<any> {
    question: Question
    current_index: number
    last_index: number
}

class FormMakerMobile extends React.Component<Props, {}> {
    renderFormBody = (item: Question) => {
        switch (item.formType) {
            case EnumFormType.radio:
                return <FormElements.RadioGroup items={item.options} />

            case EnumFormType.checkbox:
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
                    <Title typographyStyle={[EnumTypographyStyle.Narrow]}>
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

export default withRouter(FormMakerMobile)
