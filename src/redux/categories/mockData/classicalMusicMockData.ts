import { CategoryItem } from 'types'

let embed_url_ex: string =
    'https://open.spotify.com/embed/track/0aJDvIeUkceMRueD84rRDR'

let embed_ex_2: string =
    'https://open.spotify.com/embed/track/52MeDJLo9w9siXpIdWzIRm'

const exAbout: string[] = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
]

const exQuote: string[] = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
]

const exAuthor: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

export const classicalMusicMockIDS: string[] = [
    'cl001',
    'cl002',
    'cl003',
    'cl004',
    'cl005',
    'cl006',
]

export const classicalMusicMockData: { [key: string]: CategoryItem } = {
    cl001: {
        id: 'cl001',
        title: 'Track Title',
        country: 'Hungary',
        author: 'Artist Name',
        year: 1677,
        embed_url: embed_url_ex,
        body: {
            about: exAbout,
            quote: exQuote,
            author: [exAuthor],
        },
        tags: ['t001', 't002', 't003'],
    },
    cl002: {
        id: 'cl002',
        title: 'The Republic - Vol IVVV',
        country: 'Ancient Greece',
        author: 'Plato',
        year: 1877,
        tags: ['t002', 't005', 't003'],
        body: {
            about: exAbout,
            quote: exQuote,
            author: [exAuthor],
        },
        embed_url: embed_ex_2,
    },
    cl003: {
        id: 'cl003',
        title: 'Track Title',
        country: 'Hungary',
        author: 'Artist Name',
        year: 1877,
        embed_url: embed_url_ex,
        tags: ['t001', 't002', 't003'],
        body: {
            about: exAbout,
            quote: exQuote,
            author: [exAuthor],
        },
    },
}
