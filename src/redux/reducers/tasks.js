import { ARCHIVE_TASK } from '../actions/types'

const initialState = [
    {
        title: 'Renew Parking Permit',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.',
        completed: false,
        id: 0,
        archived: false,
        reminder: null,
    },
    {
        title: 'Organise a Photoshoot',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.',
        completed: true,
        id: 1,
        archived: false,
        reminder: null,
    },
    {
        title: 'Call insurance company',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.',
        completed: false,
        id: 2,
        archived: false,
        reminder: null,
    },
    {
        title: 'Change the tires',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna.',
        completed: false,
        id: 3,
        archived: false,
        reminder: null,
    },
]

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case ARCHIVE_TASK:
            return state.map((task) => {
                if (task.id === action.id) {
                    task.archived = true
                }

                return task
            })

        default:
            return state
    }
}
