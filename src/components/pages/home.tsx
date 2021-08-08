import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { IDiscoverWeeklyState } from 'stateInterfaces'

const PageWrapper = styled.div``

type Props = {
    discoverWeekly: IDiscoverWeeklyState
}

const mapStateToProps = (state: any) => {
    return { discoverWeekly: state.discoverWeekly }
}

class Home extends React.Component<Props> {
    componentDidMount() {}
    render() {
        let discoverWeekly: IDiscoverWeeklyState = this.props.discoverWeekly
        return (
            <>
                <PageWrapper>
                    {console.log(discoverWeekly)}
                    hello
                </PageWrapper>
            </>
        )
    }
}

export default connect(mapStateToProps, {})(Home)
