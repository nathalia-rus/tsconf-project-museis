import { CategoryItem } from 'types'
import painting_example from '../../../assets/mockAssets/paintings/painting_example.png'

const exAbout: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

const exQuote: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

const exAuthor: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

export const paintingsMockIDS: string[] = [
    'p001',
    'p002',
    'p003',
    'p004',
    'p005',
    'p006',
]

export const paintingsMockData: { [key: string]: CategoryItem } = {
    p001: {
        id: 'p001',
        title: 'Painting Item Title',
        country: 'Japan',
        author: 'Artist Name',
        year: '1677',
        img_url: painting_example,
        body: {
            about: [exAbout],
            quote: [exQuote],
            author: [exAuthor],
        },
        tags: ['t001', 't002', 't003'],
    },
    p002: {
        id: 'p002',
        title: 'The Republic - Vol IVVV',
        country: 'Ancient Greece',
        author: 'Plato',
        year: '1677',
        tags: ['t002', 't005', 't003'],
        body: {
            about: [exAbout],
            quote: [exQuote],
            author: [exAuthor],
        },
        img_url: painting_example,
    },
    p003: {
        id: 'p003',
        title: 'Item Title',
        country: 'Japan',
        author: 'Artist Name',
        year: '1677',
        img_url: painting_example,
        tags: ['t001', 't002', 't003'],
        body: {
            about: [exAbout],
            quote: [exQuote],
            author: [exAuthor],
        },
    },
}
