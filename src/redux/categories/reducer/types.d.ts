declare module 'reducer-types' {
    export type CategoryItem = {
        id: string
        title: string
        country: string
        author: string
        year: number
        about: string
        quote: string
        tags: string[]
        img_url?: string
        embed_url?: string
    }

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
