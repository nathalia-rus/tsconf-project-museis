import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import categoriesReducer from '../categories/reducer/categories'

import { History } from 'history'
import questionnaireReducer from '../questionnaire/reducer/questionnaire'

const rootReducer = (history: History) =>
    combineReducers({
        categories: categoriesReducer,
        questionnaire: questionnaireReducer,
        router: connectRouter(history),
    })

export default rootReducer
