import * as React from 'react'
import { Question } from 'reducer-types'
import * as FormElements from '../../molecules/formElementGroups'
import { EnumBtn, EnumFormType } from '../../types/enums'
import CenteredBodyMobile from '../../templates/containers/bodyContainers/centeredBodyMobile'
import Button from '../../atoms/buttons'
import FormNavigator from '../../molecules/formElementGroups/formNavigator'
type Props = {
    question: Question
    current_index: number
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

        // const goNext = () => {
        //     return (props.current_index += 1)
        // }

        return (
            <div>
                <CenteredBodyMobile>
                    <div>
                        {props.question.title} {props.question.formType}
                    </div>
                    {this.renderFormBody(props.question)}
                </CenteredBodyMobile>

                <FormNavigator
                    goNext={() => undefined}
                    goPrevious={() => undefined}
                    close={() => undefined}
                />
            </div>
        )
    }
}

export default FormMakerMobile
