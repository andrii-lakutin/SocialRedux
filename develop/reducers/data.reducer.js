let initialState = {
    personalInfo: {
        status: null,
        user: {
            firstName: null,
            owner: null,
            lastName: null,
            email: null,
            age: null,
            avatarUrl: null,
            headerUrl: null,
            friends: []
        }
    },
    personalInfoErrored: false
}


export default function data(state = initialState, action) {
    switch (action.type) {
        case 'GET_PERSONAL_INFO_SUCCESS':
            return {
                ...state,
                personalInfo: action.info
            };
        case 'GET_PERSONAL_INFO_HAS_ERRORED':
            return {
                ...state,
                personalInfoErrored: action.hasErrored
            };
        default:
            return state;
    }
}