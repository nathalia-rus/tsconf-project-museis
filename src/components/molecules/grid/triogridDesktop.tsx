import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import artemis from '../../../assets/gods/artemis.png'
import athena2 from '../../../assets/gods/athena2.png'
import hera from '../../../assets/gods/hera.png'

const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    height: 80vh;

    column-gap: 3vw;
    @media (max-width: 768px) {
        display: none;
    }
`

const ImgCell = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const mapStateToProps = (state: any) => {
    return { gods: state.gods }
}

class TrioGridDesktop extends React.Component {
    render() {
        return (
            <PageWrapper>
                <ImgCell src={athena2} />
                <ImgCell src={hera} />
                <ImgCell src={artemis} />
            </PageWrapper>
        )
    }
}

export default connect(mapStateToProps, {})(TrioGridDesktop)
