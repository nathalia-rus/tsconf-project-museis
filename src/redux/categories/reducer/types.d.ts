declare module 'reducer-types' {
    import { OCategory } from '../../../global/o'
    import { CategoryItem } from 'types'

    export type CategoryItemData = {
        data: { [key: string]: CategoryItem }
        listID: string[]
    }

    export interface CategoriesData {
        [key in OCategory]: CategoryItemData
    }

    export interface CategoriesReducerType {
        data: { [key in OCategory]: CategoryItemData }
        isLoading: boolean
        error: any
    }
}
