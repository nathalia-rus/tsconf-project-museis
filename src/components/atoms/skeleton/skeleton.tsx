import React from 'react'
import styled, { keyframes } from 'styled-components'
import { device } from '../../templates/devices/devices'

import './style.css'

const placeholderShimmer = keyframes`
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
`

const whiteTheme = `linear-gradient(
        120deg,
        #f1f1f1 30%,
        rgba(255, 255, 255, 0.89) 50%,
        #f1f1f1 65%
    );`

const DarkTheme = `linear-gradient(
        120deg,
        #2B2B2B 30%,
        rgba(255, 255, 255, 0.3) 50%,
        #2B2B2B 65%
    );`

const SkeletonStyled = styled.div<ISkeletonProps>`
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${placeholderShimmer};
    animation-timing-function: linear;
    background: ${(props) => (props.darkTheme ? '#2B2B2B' : '#f1f1f1')};

    background-image: ${(props) => (props.darkTheme ? DarkTheme : whiteTheme)};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;

    border-radius: ${(props) => (props.isRound ? '50%' : '')};

    opacity: ${(props) => (props.isthingloading ? 1 : 0)};
    transition: all 500ms;

    @media ${device.mobile} {
        height: ${(props) =>
            props.mobileHeight ? props.mobileHeight : '100%'};
    }
`

interface ISkeletonProps {
    isthingloading: boolean
    mobileHeight?: string
    darkTheme?: boolean
    isRound?: boolean
}

const Skeleton: React.SFC<ISkeletonProps> = (props) => (
    <SkeletonStyled
        mobileHeight={props.mobileHeight && props.mobileHeight}
        isthingloading={props.isthingloading}
        darkTheme={props.darkTheme}
        isRound={props.isRound}
    />
)

export default Skeleton
