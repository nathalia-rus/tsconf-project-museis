import { IDiscoverWeeklyState } from 'stateInterfaces'

const initialState: IDiscoverWeeklyState = {
    content: null,
    isLoading: false,
    error: null,
}

const home = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default home
