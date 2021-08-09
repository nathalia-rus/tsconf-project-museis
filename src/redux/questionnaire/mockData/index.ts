import { QuestionsData } from 'reducer-types'
import { EnumFormType } from '../../../components/types/enums'

export const questionsMockOrderedListID: string[] = ['q001', 'q002', 'q003']

export const questionsMockData: QuestionsData = {
    q001: {
        title: 'this is the title of a question',
        formType: EnumFormType.checkbox,
        options: [
            { id: 'red', value: 'red' },
            { id: 'blue', value: 'blue' },
            { id: 'pink', value: 'pink' },
            { id: 'black', value: 'black' },
        ],
        answer: ['red'],
    },

    q002: {
        title: 'this is the title of a second question',
        formType: EnumFormType.radio,
        options: [
            { id: 'red', value: 'red' },
            { id: 'blue', value: 'blue' },
            { id: 'pink', value: 'pink' },
            { id: 'black', value: 'black' },
        ],
        answer: ['red'],
    },

    q003: {
        title: 'this is the title of a third question',
        formType: EnumFormType.rating,
        answer: ['red'],
        options: [],
    },
}
