import { QuestionsData } from 'reducer-types'
import { OFormType } from 'types'

export const questionsMockOrderedListID: string[] = [
    'q001',
    'q002',
    'q003',
    'q004',
]

export const questionsMockData: QuestionsData = {
    q001: {
        title: 'this is the title of the first question, q001',
        formType: OFormType.checkbox,
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
        formType: OFormType.radio,
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
        formType: OFormType.rating,
        answer: ['red'],
        options: [],
    },

    q004: {
        title: 'this is the title of the first question, q001',
        formType: OFormType.rating,
        options: [
            { id: 'red', value: 'red' },
            { id: 'blue', value: 'blue' },
            { id: 'pink', value: 'pink' },
            { id: 'black', value: 'black' },
        ],
        answer: ['red'],
    },
}
