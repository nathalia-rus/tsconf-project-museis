import { IGodsState } from 'stateInterfaces'
import { gods_list, godsData, god_images, gods_quotes } from '../data/gods'

const initialState: IGodsState = {
    gods: godsData,
    gods_list: gods_list,
    images: god_images,
    quotes: gods_quotes,
    isLoading: false,
    error: null,
}

const gods = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default gods
