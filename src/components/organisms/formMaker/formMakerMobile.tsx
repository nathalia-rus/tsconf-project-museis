import * as React from 'react'
import { Question } from 'reducer-types'
import * as FormElements from '../../molecules/formElementGroups'
import { EnumFormType } from '../../types/enums'
import CenteredBodyMobile from '../../templates/containers/bodyContainers/centeredBodyMobile'
type Props = {
    question: Question
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

    render() {
        const { ...props } = this.props

        return (
            <div>
                <CenteredBodyMobile>
                    <div>
                        {props.question.title} {props.question.formType}
                    </div>
                    {this.renderFormBody(props.question)}
                </CenteredBodyMobile>

                <div>button here hi </div>
                <div>button here hi </div>
            </div>
        )
    }
}

export default FormMakerMobile
