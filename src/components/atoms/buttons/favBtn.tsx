import * as React from 'react'
import Button, { BtnProps } from './index'

import { OBtn } from '../../../global/o'
import Icon from '../icons'

class FavBtn extends React.Component<BtnProps, {}> {
    render() {
        return (
            <Button btn={OBtn.Naked} onClick={this.props.onClick}>
                <Icon height="25px" width="25px" icon={'favourite'} />
            </Button>
        )
    }
}

export default FavBtn
