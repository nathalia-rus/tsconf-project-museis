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

    export type CategoryDetails = {
        [key in OCategory]: { name: string }
    }
    export interface CategoriesReducerType {
        data: { [key in OCategory]: CategoryItemData }
        categoriesDetail: CategoryDetails
        isLoading: boolean
        error: any
    }
}
