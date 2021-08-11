import * as React from 'react'
import { withFormik, FormikProps } from 'formik'
import * as Yup from 'yup'
// import { register } from "../../../redux/features/user/actions/thunks";
import { connect } from 'react-redux'

import { FormItem } from 'types'

import FormElement from '../../atoms/formItems'
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

// const ButtonPositionned = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     @media ${device.mobile} {
//         margin-top: 5vh;
//         align-self: center;
//         margin-bottom: 50px;
//     }
// `

// const ButtonSubcontainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-evenly;
//     width: 100vw;
// `

// const Divider = styled.div`
//     margin-top: 20px;
// `

const CheckboxGroup = (props: OtherProps & FormikProps<FormValues>) => {
    const { values, handleChange, items, handleSubmit } = props
    return (
        <FormContainerMobile handleSubmit={handleSubmit}>
            {items.map((item, index) => {
                return (
                    <FormElement
                        onChange={handleChange}
                        key={index}
                        theme={EnumFormType.checkbox}
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
    mapPropsToValues: (props) => ({}),
    validationSchema: Yup.object().shape({
        value: Yup.array().of(Yup.object().shape({ val: Yup.boolean() })),
    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        // do submitting things

        // props.register(values.fullname, values.email, values.password);
        let finalValues = Object.keys(values).map((key) => {
            return { value: key, checked: values[key] }
        })

        let selectedValues = finalValues.filter((val) => val.checked === true)

        console.log(selectedValues)

        setSubmitting(false)
    },
})(CheckboxGroup)

export default connect(null, null)(FormikSelectItemsList)
