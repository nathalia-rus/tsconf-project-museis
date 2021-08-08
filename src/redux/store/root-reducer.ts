import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import categoriesReducer from '../reducers/categories'

import { History } from 'history'

const rootReducer = (history: History) =>
    combineReducers({
        categories: categoriesReducer,
        router: connectRouter(history),
    })

export default rootReducer
