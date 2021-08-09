import * as React from 'react'

import 'antd/dist/antd.css'
import './antd.css'

import CheckboxSingle from './checkboxSingle'
import RadioSingle from './radioSingle'
import { EnumFormType } from '../../types/enums'

interface IListItemProps {
    theme: EnumFormType
    children?: React.ReactNode
    onChange: any
    value: any
    name: any
    checked?: any
    id?: string
    onclick?: any
    removeIcon?: boolean
}

// rename it FormElement

class FormElement extends React.Component<IListItemProps, {}> {
    renderListItem(props: any) {
        switch (props.theme) {
            case EnumFormType.radio:
                return (
                    <RadioSingle
                        value={props.value}
                        name={props.value}
                        onChange={props.onChange}
                        onclick={props.onclick && props.onclick}
                        removeIcon={props.removeIcon && props.removeIcon}
                    />
                )
            case EnumFormType.checkbox:
                return (
                    <CheckboxSingle
                        checked={props.checked}
                        name={props.name}
                        onChange={props.onChange}
                        onclick={props.onclick && props.onclick}
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

export default FormElement