import * as React from 'react'
import { withFormik, FormikProps } from 'formik'
import { connect } from 'react-redux'
import { FormItem, ValidationOptions } from 'types'

import FormElement from '../../atoms/formItems'

import FormContainerMobile from '../../templates/containers/formContainers/formContainerMobile'
import { OFormType } from '../../../global/o'
import { makeValidationSchema } from '../../../helpers/validationSchema/makeValidationSchema'

type Props = {
    items: FormItem[]
    hasValidationOptions?: ValidationOptions
}

type FormValues = {
    [key: string]: boolean
}

interface MyFormProps {
    items: FormItem[]
}

const CheckboxGroup = (props: Props & FormikProps<FormValues>) => {
    const { values, handleChange, items, handleSubmit } = props
    return (
        <FormContainerMobile handleSubmit={handleSubmit}>
            {items.map((item, index) => {
                return (
                    <FormElement
                        onChange={handleChange}
                        key={index}
                        formType={OFormType.checkbox}
                        value={item}
                        name={item.value}
                        checked={values[`${item.value}`]}
                    >
                        {item.value}
                    </FormElement>
                )
            })}
        </FormContainerMobile>
    )
}

const FormikSelectItemsList = withFormik<MyFormProps, FormValues>({
    validationSchema: (props: Props) =>
        makeValidationSchema(props.items, props.hasValidationOptions),

    // do submitting things
    handleSubmit: (values, { props, setSubmitting }) => {
        let finalValues = Object.keys(values).map((key) => {
            return { value: key, checked: values[key] }
        })

        let selectedValues = finalValues.filter((val) => val.checked === true)

        console.log(selectedValues)

        setSubmitting(false)
    },
})(CheckboxGroup)

export default connect(null, null)(FormikSelectItemsList)
