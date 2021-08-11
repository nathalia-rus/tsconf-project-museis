import { CategoriesReducerType } from 'reducer-types'
import { OCategory } from '../../../global/o'

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
        [OCategory.Literature]: {
            data: literatureMockData,
            listID: literatureMockIDS,
        },

        [OCategory.Paintings]: {
            data: paintingsMockData,
            listID: paintingsMockIDS,
        },

        [OCategory.ClassicalMusic]: {
            data: classicalMusicMockData,
            listID: classicalMusicMockIDS,
        },

        [OCategory.Sculptures]: {
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
