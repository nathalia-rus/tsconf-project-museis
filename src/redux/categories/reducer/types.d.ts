declare module 'reducer-types' {
    import { Category } from '../../../global/o'
    import { CategoryItem } from 'types'

    export type CategoryItemData = {
        data: { [key: string]: CategoryItem }
        listID: string[]
    }

    export interface CategoriesData {
        [key in Category]: CategoryItemData
    }

    export type CategoryDetails = {
        [key in Category]: { name: string }
    }

    export type BodySectionID = 'about' | 'quote' | 'author'

    export interface CategoriesReducerType {
        data: { [key in Category]: CategoryItemData }
        categoriesDetail: CategoryDetails
        bodySectionsListID: BodySectionID[]
        isLoading: boolean
        error: any
    }
}
