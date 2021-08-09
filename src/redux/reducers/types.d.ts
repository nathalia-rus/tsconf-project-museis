declare module 'reducer-types' {
    // export type CategoryEnumObj = {
    //     [key in EnumCategory]: any
    // }
    import { EnumCategory } from '../../components/types/enums'

    export type LiteratureItem = {
        id: string
        title: string
        country: string
        author: string
        year: number
        about: string
        quote: string
        tags: string[]
    }

    export type PaintingItem = {
        id: string
        title: string
        country: string
        author: string
        year: number
        tags: string[]
    }

    export type CategoryItem = LiteratureItem | PaintingItem

    export type CategoryItemData = {
        data: { [key: string]: CategoryItem }
        listID: string[]
    }

    export interface CategoriesData {
        [key in EnumCategory]: CategoryItemData
    }

    export interface CategoriesReducerType {
        data: { [key in EnumCategory]: CategoryItemData }
        isLoading: boolean
        error: any
    }
}
