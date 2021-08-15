export type QuestionsData = {
    [key: string]: Question
}

export interface QuestionnaireReducerType {
    questionsOrderedListID: string[]
    questionsData: QuestionsData
    isLoading: boolean
    error: any
}
