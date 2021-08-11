declare module 'reducer-types' {
    import { FormType, RatingType } from '../../../global/o'

    export type Question = {
        title: string
        answer: string[]
        formType: FormType
        ratingType?: RatingType
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
