import React, { Component } from 'react'
import Particles from 'react-particles-js'

class ParticlesCanvas extends Component {
    state = { width: '0px', height: '0px' }
    componentDidMount() {
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }
    updateWindowDimensions = () => {
        this.setState({
            width: `${window.innerWidth}px`,
            height: `${window.innerHeight}px`,
        })
    }
    render() {
        const { width, height } = this.state
        console.log(width, height)
        return (
            <div
                style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <Particles
                    {...this.state}
                    params={{
                        particles: {
                            number: {
                                value: 200,
                                density: {
                                    enable: true,
                                    value_area: 900,
                                },
                            },
                            color: {
                                value: 'rgb(239, 255, 183)',
                            },
                            shape: {
                                type: 'circle',
                                stroke: {
                                    width: 0,
                                    color: '#000000',
                                },
                                image: {
                                    src: 'img/github.svg',
                                    width: 100,
                                    height: 100,
                                },
                            },
                            opacity: {
                                value: 0.4,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 0.3,
                                    opacity_min: 0.1,
                                    sync: false,
                                },
                            },
                            size: {
                                value: 1,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 0.3,
                                    size_min: 0.1,
                                    sync: false,
                                },
                            },
                            line_linked: {
                                enable_auto: true,
                                distance: 100,
                                color: '#fff',
                                opacity: 0.2,
                                width: 0,
                                condensed_mode: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 600,
                                },
                            },
                            move: {
                                enable: true,
                                speed: 0.3,
                                direction: 'none',
                                random: false,
                                straight: false,
                                out_mode: 'out',
                                bounce: false,
                                attract: {
                                    enable: true,
                                    rotateX: 600,
                                    rotateY: 1200,
                                },
                            },
                        },
                        interactivity: {
                            detect_on: 'canvas',
                            events: {
                                onhover: {
                                    enable: false,
                                },
                                onclick: {
                                    enable: false,
                                },
                                resize: true,
                            },
                        },
                        retina_detect: true,
                    }}
                />
            </div>
        )
    }
}

export default ParticlesCanvas
