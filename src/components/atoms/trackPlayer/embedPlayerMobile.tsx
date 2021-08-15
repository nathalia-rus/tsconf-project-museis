import * as React from 'react'
import styled from 'styled-components'

type IStyledProps = {
    size?: 'default' | 'big'
}

const Player = styled.iframe<IStyledProps>`
    height: 100px;
    width: ${(props) => (props.size === 'big' ? '90vw' : '78vw')};
    height: ${(props) => (props.size === 'big' ? '100px' : '77px')};
    display: flex !important;
    flex-direction: row !important;
    align-self: center !important;
    justify-self: center !important;
    background-color: white;
    padding-top: 10px;
    padding-bottom: 10px;
`

type PlayerProps = {
    title: string
    embed_url?: string
    size?: 'default' | 'big'
}

const EmbedPlayerMobile: React.FunctionComponent<PlayerProps> = (props) => {
    return (
        <Player
            title={props.title}
            src={props.embed_url}
            frameBorder={0}
            allowTransparency={true}
            allow="encrypted-media"
            size={props.size}
        ></Player>
    )
}
export default EmbedPlayerMobile
