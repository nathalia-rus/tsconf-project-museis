declare module 'types' {
    import { NavigationItem, FormType, RatingType } from './o'

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

    // show use of that in Yup stuff

    export type FormItem = {
        id: any
        value: string
        hasValidation?: ValidationOptions
    }

    export type Question = {
        title: string
        formType: FormType
        answer: string[]
        options: FormItem[]
        ratingType?: RatingType
        img_url?: string
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
        year: number
        body: CategoryItemBody
        tags: string[]
        img_url?: string
        embed_url?: string
    }
}
