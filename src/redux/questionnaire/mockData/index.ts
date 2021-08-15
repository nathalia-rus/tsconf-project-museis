import { OFormType, ORatingType } from '../../../global/o'
import painting_example from '../../../assets/mockAssets/paintings/painting_example.png'
import { QuestionsData } from '../reducer/types'

export const questionsMockOrderedListID: string[] = [
    'q001',
    'q002',
    'q003',
    'q004',
    'q005',
    'q006',
    'q007',
]

export const questionsMockData: QuestionsData = {
    q001: {
        title: 'this is the title of a first question',
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
        title: 'What color makes you feel most nostalgic?',
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
        title: 'this is the title of the fourth question',
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
        img_url: painting_example,
    },

    q006: {
        title: 'this is the title of another question',
        formType: OFormType.radio,
        options: [
            { id: 'adjective_1', value: 'adjective 1' },
            { id: 'adjective_2', value: 'adjective 2' },
            { id: 'adjective_3', value: 'adjective 3' },
            { id: 'adjective_4', value: 'adjective 4' },
        ],
        answer: ['red'],
        img_url: painting_example,
    },
    q007: {
        title: 'This is the title of another question',
        formType: OFormType.rating,
        ratingType: ORatingType.grade,
        answer: ['red'],
        options: [],
        img_url: painting_example,
    },
}
