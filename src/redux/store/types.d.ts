import { StateType } from 'typesafe-actions'
import { CategoriesReducerType } from 'reducer-types'

declare module 'typesafe-actions' {
    // store I export in store/index
    export type Store = StateType<typeof import('./index').default>
    // root reducer I export in root-reducer which combines all my reducers.
    export type RootState = {
        categories: CategoriesReducerType
    }
}
