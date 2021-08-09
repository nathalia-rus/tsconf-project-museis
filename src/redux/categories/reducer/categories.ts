import { CategoriesReducerType } from 'reducer-types'
import { EnumCategory } from '../../../components/types/enums'
import {
    classicalMusicMockData,
    classicalMusicMockIDS,
} from '../mockData/classicalMusicMockData'
import {
    literatureMockData,
    literatureMockIDS,
} from '../mockData/literatureMockData'
import {
    paintingsMockData,
    paintingsMockIDS,
} from '../mockData/paintingsMockData'
import {
    sculpturesMockData,
    sculpturesMockIDS,
} from '../mockData/sculpturesMockData'

const initialState: CategoriesReducerType = {
    data: {
        [EnumCategory.Literature]: {
            data: literatureMockData,
            listID: literatureMockIDS,
        },

        [EnumCategory.Paintings]: {
            data: paintingsMockData,
            listID: paintingsMockIDS,
        },

        [EnumCategory.ClassicalMusic]: {
            data: classicalMusicMockData,
            listID: classicalMusicMockIDS,
        },

        [EnumCategory.Sculptures]: {
            data: sculpturesMockData,
            listID: sculpturesMockIDS,
        },
    },
    isLoading: false,
    error: null,
}

const categoriesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default categoriesReducer
