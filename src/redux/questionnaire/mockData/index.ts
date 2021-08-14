import { QuestionsData } from 'reducer-types'
import { OFormType, ORatingType } from '../../../global/o'
import painting_example from '../../../assets/mockAssets/paintings/painting_example.png'


export const questionsMockOrderedListID: string[] = [
    'q001',
    'q002',
    'q003',
    'q004',
    'q005',
    "q006",
    "q007"
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
        ratingType: ORatingType.sentiment,
        answer: ['red'],
        options: [],
    },

    q004: {
        title: 'this is the title of the first question, q001',
        formType: OFormType.rating,
          ratingType: ORatingType.grade,
        options: [
            { id: 'red', value: 'red' },
            { id: 'blue', value: 'blue' },
            { id: 'pink', value: 'pink' },
            { id: 'black', value: 'black' },
        ],
        answer: ['red'],
    },
        q005: {
        title: 'this is the title of the first question, q005',
        formType: OFormType.checkbox,
        options: [
            { id: 'red', value: 'red' },
            { id: 'blue', value: 'blue' },
            { id: 'pink', value: 'pink' },
            { id: 'black', value: 'black' },
        ],
        answer: ['red'],
        img_url: painting_example
    },

        q006: {
        title: 'this is the title of a second question',
        formType: OFormType.radio,
        options: [
            { id: 'red', value: 'red' },
            { id: 'blue', value: 'blue' },
            { id: 'pink', value: 'pink' },
            { id: 'black', value: 'black' },
        ],
        answer: ['red'],
           img_url: painting_example
    },
    q007: {
        title: 'this is the title of a third question',
        formType: OFormType.rating,
        answer: ['red'],
        options: [],
         img_url: painting_example
    },

}
