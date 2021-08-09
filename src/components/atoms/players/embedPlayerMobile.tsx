import * as React from 'react'
import styled from 'styled-components'

const PlayerElem = styled.iframe`
    height: 77px;
    width: 78vw;
    display: flex !important;
    flex-direction: row !important;
    align-self: center !important;
    justify-self: center !important;
    background-color: white;
    padding-top: 10px;
    padding-bottom: 10px;
`

type Props = {
    embed_url?: string
    title: string
}

class EmbedPlayerMobile extends React.Component<Props, {}> {
    render() {
        let { ...props } = this.props
        return (
            <PlayerElem
                title={props.title}
                src={props.embed_url}
                frameBorder={0}
                allowTransparency={true}
                allow="encrypted-media"
            ></PlayerElem>
        )
    }
}

export default EmbedPlayerMobile
