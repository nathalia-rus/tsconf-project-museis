import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import godsReducer from '../reducers/gods'

import { History } from 'history'

const rootReducer = (history: History) =>
    combineReducers({
        gods: godsReducer,

        router: connectRouter(history),
    })

export default rootReducer
