import React from 'react'

import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Question, QuestionnaireReducerType } from 'reducer-types'
import { RootState } from 'typesafe-actions'
import FormMakerMobile from '../organisms/formMaker/formMakerMobile'

import MainContainer from '../templates/containers/pageContainers/mainContainer'

interface Props extends RouteComponentProps<any> {
    questionnaire: QuestionnaireReducerType
}

const mapStateToProps = (state: RootState) => {
    return {
        questionnaire: state.questionnaire,
    }
}

class Questionnaire extends React.Component<Props> {
    componentDidMount() {}

    render() {
        let params = new URLSearchParams(this.props.location.search)
        let question_id = params.get('id')

        let questionnaire = this.props.questionnaire
        let item: Question | null = question_id
            ? questionnaire.questionsData[question_id]
            : null

        return (
            <MainContainer>
                {item && <FormMakerMobile question={item} />}
            </MainContainer>
        )
    }
}

export default withRouter(connect(mapStateToProps, {})(Questionnaire))
