import * as React from 'react'
import { Rate } from 'antd'
import { withFormik, FormikProps } from 'formik'
import * as Yup from 'yup'

import { connect } from 'react-redux'

import { FormItem } from 'types'

import FormContainerMobile from '../../templates/containers/formContainers/formContainerMobile'
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons'

type OtherProps = {
    items: FormItem[]
}

type FormValues = {
    [key: string]: boolean
}

interface MyFormProps {
    items: FormItem[]
}

const ratingIcons: { [key: number]: React.ReactNode } = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
}

const Rating = (props: OtherProps & FormikProps<FormValues>) => {
    const { handleSubmit, handleChange } = props
    return (
        <FormContainerMobile handleSubmit={handleSubmit}>
            <>
                <Rate
                    defaultValue={2}
                    character={(index: number) => index + 1}
                    onChange={handleChange}
                />
                <br />
                <Rate
                    defaultValue={3}
                    character={(index: number) => ratingIcons[index + 1]}
                    onChange={handleChange}
                />
            </>
            ,
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
})(Rating)

export default connect(null, null)(FormikSelectItemsList)
