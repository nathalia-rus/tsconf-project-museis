import { QuestionnaireReducerType } from 'reducer-types'
import { questionsMockData, questionsMockOrderedListID } from '../mockData'

const initialState: QuestionnaireReducerType = {
    questionsOrderedListID: questionsMockOrderedListID,
    questionsData: questionsMockData,
    isLoading: false,
    error: null,
}

const questionnaireReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default questionnaireReducer
