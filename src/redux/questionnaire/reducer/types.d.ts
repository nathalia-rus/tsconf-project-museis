declare module 'reducer-types' {
    import { EnumFormType } from '../../../components/types/enums'
    import { FormItem } from 'types'

    export type Question = {
        title: string
        answer: string[]
        formType: EnumFormType
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
