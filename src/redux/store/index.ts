import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory, createHashHistory } from 'history'
// import * as Sentry from "@sentry/react";
import { routerMiddleware } from 'connected-react-router'

// utils
import { composeEnhancers } from './utils'
// material for the store:
import rootReducer from './root-reducer'

import thunk from 'redux-thunk'

// import RootEpic from "./root-epic";

// create epicMiddleware

// the createEpicMiddleware is constituted of the types of RootAction,
// RoosState etc I created in the module at types.d.ts file

// this is a decent way to check if you are in standalone mode
const isStandalone = window.matchMedia('(display-mode: standalone)').matches

export const history = isStandalone
    ? // hash history is required for standalone mode
      createHashHistory()
    : // Browser history for non standalone mode is fine
      createBrowserHistory()

// onfigure middlewares

const appRouterMiddleware = routerMiddleware(history)
const middlewares = [appRouterMiddleware, thunk]

// const sentryReduxEnhancer = Sentry.createReduxEnhancer({
//   // Optionally pass options
// });
// compose enhancers here
const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // sentryReduxEnhancer
)

// rehydrate app state on app start: the initial state.
const initialState = {}

// finally, create store: created with the reducer, the initial state, and the enhancers,
// hence the rootReducer !

const store = createStore(rootReducer(history), initialState, enhancer)

export default store
