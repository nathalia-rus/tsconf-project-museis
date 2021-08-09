import * as React from 'react'
import { Radio } from 'antd'
import { withFormik, FormikProps } from 'formik'
import * as Yup from 'yup'

import { connect } from 'react-redux'

import { FormItem } from 'types'

import FormElement from '../../atoms/formElements'
import { EnumFormType } from '../../types/enums'
import FormContainerMobile from '../../templates/containers/formContainers/formContainerMobile'

type OtherProps = {
    items: FormItem[]
}

type FormValues = {
    [key: string]: boolean
}

interface MyFormProps {
    items: FormItem[]
}

const CheckboxGroup = (props: OtherProps & FormikProps<FormValues>) => {
    const { values, handleChange, items, handleSubmit } = props
    return (
        <FormContainerMobile handleSubmit={handleSubmit}>
            <Radio.Group>
                {items.map((item, index) => {
                    return (
                        <FormElement
                            onChange={handleChange}
                            key={index}
                            theme={EnumFormType.radio}
                            value={item.value}
                            name={item.value}
                            checked={values[`${item.value}`]}
                        >
                            {item.value}
                        </FormElement>
                    )
                })}
            </Radio.Group>
        </FormContainerMobile>
    )
}

const FormikSelectItemsList = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: (props) => ({}),
    validationSchema: Yup.object().shape({
        value: Yup.array().of(Yup.object().shape({ val: Yup.boolean() })),
    }),

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
