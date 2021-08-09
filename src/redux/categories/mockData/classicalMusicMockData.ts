import { CategoryItem } from 'reducer-types'

let embed_url_ex: string =
    'https://open.spotify.com/embed/track/0aJDvIeUkceMRueD84rRDR'

let embed_ex_2: string =
    'https://open.spotify.com/embed/track/52MeDJLo9w9siXpIdWzIRm'

const exAbout: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

const exQuote: string =
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
        title: 'Sculptures The Art of War',
        country: 'Japan',
        author: 'Sun Tzu',
        year: 1677,
        embed_url: embed_url_ex,
        about: exAbout,
        quote: exQuote,
        tags: ['t001', 't002', 't003'],
    },
    cl002: {
        id: 'cl002',
        title: 'The Republic - Vol IVVV',
        country: 'Ancient Greece',
        author: 'Plato',
        year: 1877,
        tags: ['t002', 't005', 't003'],
        about: exAbout,
        embed_url: embed_ex_2,
        quote: exQuote,
    },
    cl003: {
        id: 'cl003',
        title: 'The Art of War',
        country: 'Japan',
        author: 'Sun Tzu',
        year: 1877,
        embed_url: embed_url_ex,
        tags: ['t001', 't002', 't003'],
        about: exAbout,
        quote: exQuote,
    },
}