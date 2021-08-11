import * as React from 'react'

import 'antd/dist/antd.css'
import './antd.css'

import CheckboxSingle from './checkboxSingle'
import RadioSingle from './radioSingle'
import { OFormType } from 'types'

interface IListItemProps {
    theme: OFormType
    children?: React.ReactNode
    onChange: any
    value: any
    name: any
    checked?: any
    id?: string
    onclick?: any
    removeIcon?: boolean
}

// rename it FormItems

class FormItems extends React.Component<IListItemProps, {}> {
    renderListItem(props: any) {
        switch (props.theme) {
            case OFormType.radio:
                return (
                    <RadioSingle
                        value={props.value}
                        name={props.value}
                        onChange={props.onChange}
                    />
                )
            case OFormType.checkbox:
                return (
                    <CheckboxSingle
                        checked={props.checked}
                        name={props.name}
                        onChange={props.onChange}
                    />
                )
            default:
                alert('please chose a form element type')
        }
    }
    render() {
        return this.renderListItem(this.props)
    }
}

export default FormItems
