import * as React from 'react'

import styled from 'styled-components'
import painting_placeholder from '../../../assets/mockAssets/paintings/painting_placeholder.png'
import { device } from '../../templates/devices/devices'

import Skeleton from '../skeleton/skeleton'

type IImgProps = {
    isthingloading?: boolean
    height?: string
}
const ImageStyleWrapper = styled.div<IImgProps>`
    width: 100%;
    position: relative;
    object-fit: cover !important;
    height: ${(props) => (props.height ? props.height : '230px')};

    @media ${device.ipad} {
        height: ${(props) => (props.height === '160px' ? '230px' : '350px')};
        /* max-width: 93vw; */
        margin: 0 auto;
    }
    z-index: 1;
`

const ImageStyle = styled.img<IImgProps>`
    width: 100%;
    height: 100%;
    object-fit: cover !important;

    opacity: ${(props) => (props.isthingloading === false ? 1 : 0)};
    transition: opacity 400ms;

    z-index: 1;
    border-radius: 5px;
`

const Wrapper = styled.div`
    /* width: 100vw; */
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    @media ${device.ipad} {
        /* max-width: 93vw; */
        margin: 0 auto;
    }
`

export interface IImageProps {
    img_url?: string
    placeholder?: string
    height?: string
}

type State = {
    src: any
    isLoading: boolean
}

class BannerImage extends React.Component<IImageProps, State> {
    state = {
        src: null,
        isLoading: true,
    }

    componentDidMount() {
        const src =
            this.props.img_url !== undefined
                ? this.props.img_url
                : this.props.placeholder
                ? this.props.placeholder
                : undefined

        if (src) {
            return this.setState({ src })
        }
    }

    componentDidUpdate(prevProps: IImageProps) {
        if (this.props.img_url !== prevProps.img_url) {
            const src =
                this.props.img_url !== undefined
                    ? this.props.img_url
                    : this.props.placeholder
                    ? this.props.placeholder
                    : undefined

            if (src) {
                return this.setState({ src: src, isLoading: false })
            }
        }
    }

    render() {
        const { height } = this.props
        const { isLoading } = this.state

        return (
            <Wrapper>
                <Skeleton mobileHeight="90%" isthingloading={isLoading} />

                <ImageStyleWrapper height={height && height}>
                    <ImageStyle
                        src={this.state.src || painting_placeholder}
                        isthingloading={isLoading}
                        onLoad={() => {
                            setTimeout(() => {
                                this.setState({
                                    ...this.state,

                                    isLoading: false,
                                })
                            }, 100)
                        }}
                    />
                </ImageStyleWrapper>
            </Wrapper>
        )
    }
}

export default BannerImage
