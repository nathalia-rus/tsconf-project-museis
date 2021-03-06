import { CategoryItem } from 'types'
import sculpture_example from '../../../assets/mockAssets/sculptures/sculpture_example.jpg'
import sculpture_example2 from '../../../assets/mockAssets/sculptures/sculpture_example2.jpg'

const exAbout: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

const exQuote: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

const exAuthor: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

export const sculpturesMockIDS: string[] = [
    's001',
    's002',
    's003',
    's004',
    's005',
    's006',
]

export const sculpturesMockData: { [key: string]: CategoryItem } = {
    s001: {
        id: 's001',
        title: 'Metamorphosis',
        country: 'Ancient Greece',
        author: 'Artist Name',
        year: '1677',
        img_url: sculpture_example,
        body: {
            about: [exAbout],
            quote: [exQuote],
            author: [exAuthor],
        },
        tags: ['t001', 't002', 't003'],
    },
    s002: {
        id: 's002',
        title: 'Roman Sculpture',
        country: 'Ancient Rome',
        author: 'Unknown',
        year: '13 BCE',
        tags: ['t008', 't007', 't003'],
        img_url: sculpture_example2,
        body: {
            about: [exAbout],
            quote: [exQuote],
            author: [exAuthor],
        },
    },
    s003: {
        id: 's003',
        title: 'Item Title',
        country: 'Japan',
        author: 'Artist Name',
        year: '1677',
        img_url: sculpture_example,
        tags: ['t001', 't002', 't003'],
        body: {
            about: [exAbout],
            quote: [exQuote],
            author: [exAuthor],
        },
    },
}
