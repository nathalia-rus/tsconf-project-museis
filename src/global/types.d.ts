declare module 'types' {
    import { NavigationItem, FormType, RatingType } from './o'

    export type MenuItem = {
        name: string
        path: string
        id: NavigationItem
    }

    export type FormItem = {
        id: any
        value: string
    }

    export type Question = {
        title: string
        answer: string[]
        formType: FormType
        ratingType?: RatingType
        answer: [string]
        options: FormItem[]
        img_url?: string
    }

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
}
