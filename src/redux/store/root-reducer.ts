import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import discoverWeeklyReducer from '../reducers/discoverWeekly'

import { History } from 'history'

const rootReducer = (history: History) =>
    combineReducers({
        discoverWeekly: discoverWeeklyReducer,
        router: connectRouter(history),
    })

export default rootReducer
