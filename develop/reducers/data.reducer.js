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
            skype: null,
            city: null,
            job: null,
            friends: [],
            posts: [],
        }
    },

    personalInfoErrored: false,
    postsErrored: false,
    changeErrored: false
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
        case 'PERSONAL_CHANGE_SUCCESS':
            return {
                ...state,
                personalInfo: action.info
            };
        case 'PERSONAL_CHANGE_IS_LOADING':
            return {
                ...state,
                presonalInfoIsLoading: action.bool
            };
        case 'PERSONAL_CHANGE_HAS_ERRORED':
            return {
                ...state,
                changeErrored: action.hasErrored
            };
        case 'SUBMIT_POST_MSG_SUCCESS':
            return {
                ...state,
                personalInfo: action.info
            };
        case 'SUBMIT_POST_MSG_HAS_ERRORED':
            return {
                ...state,
                changeErrored: action.hasErrored
            };
        default:
            return state;
    }
}