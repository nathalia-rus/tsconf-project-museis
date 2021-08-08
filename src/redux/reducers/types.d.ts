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

    export type LiteratureItemObj = {
        [key: string]: LiteratureItem
    }

    export type LiteratureItemData = {
        data: LiteratureItemObj
        listID: string[]
    }

    export type CategoriesData = {
        [EnumCategory.Literature]: LiteratureItemData
        [EnumCategory.Paintings]: LiteratureItemData
    }

    export interface CategoriesReducerType {
        data: CategoriesData | null
        isLoading: boolean
        error: any
    }
}
