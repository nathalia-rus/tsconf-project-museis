import React from 'react'

import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { RootState } from 'typesafe-actions'
import { Question } from '../../global/o'
import { QuestionnaireReducerType } from '../../redux/questionnaire/reducer/types'
import QuestionnaireFormMaker from '../organisms/formMaker/questionnaireFormMaker'

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
        let query_index = params.get('n')
        let n = query_index !== null && parseInt(query_index)

        let questionnaire = this.props.questionnaire
        let item: Question | null = n
            ? questionnaire.questionsData[
                  questionnaire.questionsOrderedListID[n - 1]
              ]
            : null

        return (
            <MainContainer>
                {item && n && (
                    <QuestionnaireFormMaker
                        last_index={questionnaire.questionsOrderedListID.length}
                        current_index={n}
                        question={item}
                    />
                )}
            </MainContainer>
        )
    }
}

export default withRouter(connect(mapStateToProps, {})(Questionnaire))
