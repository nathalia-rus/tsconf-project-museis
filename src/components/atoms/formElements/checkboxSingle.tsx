import * as React from 'react'
import styled from 'styled-components'

import { Checkbox } from 'antd'
import 'antd/dist/antd.css'
import './antd.css'
import { device } from '../../templates/devices/devices'

interface IListItemProps {
    onChange: any
    name: any
    checked?: any
    onclick?: any
}

const Text = styled.div`
    @media ${device.mobile} {
        font-family: 'Roboto-Light';
        font-size: 16px;
        line-height: 18px;
        display: flex;
        align-self: flex-start;
        padding-left: 35px;
    }
`

class CheckboxSingle extends React.Component<IListItemProps, {}> {
    render() {
        const { checked, name, onChange } = this.props

        return (
            <React.Fragment>
                <Checkbox checked={checked} name={name} onChange={onChange}>
                    <Text>{name}</Text>
                </Checkbox>
            </React.Fragment>
        )
    }
}

export default CheckboxSingle
