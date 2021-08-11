import * as React from 'react'
import { Rate } from 'antd'
import { withFormik, FormikProps } from 'formik'

import { connect } from 'react-redux'

import FormContainerMobile from '../../templates/containers/formContainers/formContainerMobile'
import {
    FrownOutlined,
    MehOutlined,
    SmileOutlined,
    HeartOutlined,
} from '@ant-design/icons'
import { FormItem } from 'types'
import { OColourPalette, RatingType, ORatingType } from '../../../global/o'

type MyFormProps = {
    items: FormItem[]
    ratingTheme?: RatingType
}

type FormValues = {
    rate: number
}

type ExternalProps = MyFormProps

const SentimentGroup: any = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
}

const RatingGroup = (props: ExternalProps & FormikProps<FormValues>) => {
    const { setFieldValue, values, handleSubmit, ratingTheme } = props

    const onChange = (val: number) => setFieldValue('rate', val)

    const val = values.rate
    const ratingSize: number = 36
    const defaultVal: number = 3

    const style = {
        fontSize: ratingSize,
        color: OColourPalette.primary,
    }

    //  style={{ ...., color: 'var(--color-primary)' }}

    const renderRatingTheme = () => {
        switch (ratingTheme) {
            case ORatingType.heart:
                return (
                    <Rate
                        value={val}
                        defaultValue={defaultVal}
                        character={<HeartOutlined />}
                        onChange={onChange}
                        style={style}
                    />
                )

            case ORatingType.sentiment:
                return (
                    <Rate
                        value={val}
                        defaultValue={defaultVal}
                        character={({ index }: { index: number }) =>
                            SentimentGroup[index + 1]
                        }
                        onChange={onChange}
                        style={style}
                    />
                )

            case ORatingType.grade:
                return (
                    <Rate
                        defaultValue={defaultVal}
                        character={({ index }: { index: number }) => index + 1}
                        style={style}
                        onChange={onChange}
                    />
                )

            default:
                return (
                    <Rate
                        value={val}
                        defaultValue={defaultVal}
                        character={<HeartOutlined />}
                        onChange={onChange}
                        style={style}
                    />
                )
        }
    }
    return (
        <FormContainerMobile handleSubmit={handleSubmit}>
            {renderRatingTheme()}
        </FormContainerMobile>
    )
}

const FormikSelectItemsList = withFormik<MyFormProps, FormValues>({
    handleSubmit: (values, { props, setSubmitting }) => {
        // sends back item.answer = val
        setSubmitting(false)
    },
})(RatingGroup)

export default connect(null, null)(FormikSelectItemsList)
