

const initialState = {
    users: [], userName: '' || sessionStorage.getItem('userName')
}

export const ADD_DETAILS = 'Add User Details'
export const Search = 'search';
export const Clear = 'Clear Search'
export const ADD_Username = 'Add Username'

export const GithubReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DETAILS:
            sessionStorage.setItem('user', JSON.stringify(action.payload))
            return { ...state, users: action.payload }

        case Search:
            sessionStorage.setItem('userName', action.payload)
            return { ...state, userName: action.payload }

        case Clear:
            sessionStorage.setItem('userName', '')
            return { ...state, userName: '', users: [] }

        default:
            return state

    }
}