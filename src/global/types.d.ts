declare module 'types' {
    import { NavigationItem } from './o'

    export type MenuItem = {
        name: string
        path: string
        id: NavigationItem
    }

    export type ValidationOptions = {
        isRequired?: boolean
        maxChar?: number
        minChar?: number
    }

    export type FormItem = {
        id: string
        value: string
    }

    export type CategoryItemBody = {
        about: string[]
        quote: string[]
        author: string[]
    }

    export type CategoryItem = {
        id: string
        title: string
        country: string
        author: string
        year: string
        body: CategoryItemBody
        tags: string[]
        img_url?: string
        embed_url?: string
    }

    export type Tag = {
        id: string
        name: string
    }
}
