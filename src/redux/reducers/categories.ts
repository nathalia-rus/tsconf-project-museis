import { CategoriesReducerType } from 'reducer-types'
import { EnumCategory } from '../../components/types/enums'
import {
    literatureMockData,
    literatureMockIDS,
} from '../mockData/literatureMockData'

const initialState: CategoriesReducerType = {
    data: {
        [EnumCategory.Literature]: {
            data: literatureMockData,
            listID: literatureMockIDS,
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
