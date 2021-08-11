declare module 'reducer-types' {
    import { OFormType, ORatingType } from 'types'
    import { FormItem } from 'types'

    export type Question = {
        title: string
        answer: string[]
        formType: OFormType
        ratingType?: ORatingType
        answer: [string]
        options: FormItem[]
        img_url?: string
    }

    export type QuestionsData = {
        [key: string]: Question
    }

    export interface QuestionnaireReducerType {
        questionsOrderedListID: string[]
        questionsData: QuestionsData
        isLoading: boolean
        error: any
    }
}
