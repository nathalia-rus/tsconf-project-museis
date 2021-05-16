import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ParticlesCanvas from '../organisms/particles/particles'


// import ParticlesCanvas from '../organisms/particles/particles'

// import SmoothMouseMovement from '../organisms/cursor/smoothMouseMovement'
// import a_test_tilt_1 from '../../assets/images/a_test_tilt_1.png'
// import ImgTilt from '../organisms/cursor/imgTilt'
// import a_test_tilt_2 from '../../assets/images/a_test_tilt_2.png'

const PageWrapper = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

type Props = {
    god?: any
}

const mapStateToProps = (state: any) => {
    return { gods: state.gods }
}

// const options = {
//     max: 20,
//     perspective: 1000,
//     scale: 1.05,
// }

class GodSingle extends React.Component<Props> {
    componentDidMount() {}
    render() {
      
        return (
            <>
                <ParticlesCanvas />

                <PageWrapper>
                    hi
                </PageWrapper>
            </>
        )
    }
}

export default connect(mapStateToProps, {})(GodSingle)
