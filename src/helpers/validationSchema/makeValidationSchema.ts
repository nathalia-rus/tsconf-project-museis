import { FormItem, ValidationOptions } from 'types'
import * as Yup from 'yup'
export const makeValidationSchema = (
    items: FormItem[],
    props?: ValidationOptions
) => {
    Yup.object().shape({})
}
