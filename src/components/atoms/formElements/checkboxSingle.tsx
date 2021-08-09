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
    @media ${device.mobile_and_ipad} {
        font-family: 'Roboto-Light';
        font-size: 16px;
        line-height: 18px;
        display: flex;
        transform: translateY(3px);
        padding-left: 10px;
    }
`
const Wrap = styled.div`
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 1px solid #00000016;
    width: 78vw;
`

class CheckboxSingle extends React.Component<IListItemProps, {}> {
    render() {
        const { checked, name, onChange } = this.props

        return (
            <Wrap>
                <Checkbox checked={checked} name={name} onChange={onChange}>
                    <Text>{name}</Text>
                </Checkbox>
            </Wrap>
        )
    }
}

export default CheckboxSingle
