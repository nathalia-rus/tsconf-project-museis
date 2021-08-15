import { CategoryItem } from 'types'

const exAbout: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

const exQuote: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

const exAuthor: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

export const literatureMockIDS: string[] = [
    'l001',
    'l002',
    'l003',
    'l004',
    'l005',
    'l006',
]

export const literatureMockData: { [key: string]: CategoryItem } = {
    l001: {
        id: 'l001',
        title: 'Book Title',
        country: 'Japan',
        author: 'Author Name',
        year: '1677',
        body: {
            about: [exAbout],
            quote: [exQuote],
            author: [exAuthor],
        },
        tags: ['t001', 't002', 't003'],
    },
    l002: {
        id: 'l002',
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
    },
    l003: {
        id: 'l003',
        title: 'Book Title',
        country: 'Japan',
        author: 'Author Name',
        year: '1677',
        tags: ['t001', 't002', 't003'],
        body: {
            about: [exAbout],
            quote: [exQuote],
            author: [exAuthor],
        },
    },
}
