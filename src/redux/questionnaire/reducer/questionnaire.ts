import { questionsMockData, questionsMockOrderedListID } from '../mockData'
import { QuestionnaireReducerType } from './types'

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
