let initialState = {
    hasErrored: false,
    isLoading: false,
    registrationResponse: {
        status: null
    },
    loginResponse: {
        status: null
    },
    sessionsResponse: {
        status: null,
        user: {
            _id: null,
            email: null,
            firstName: null,
            lastName: null
        }
    },
    loginCsrfToken: undefined,
    registrationCsrfToken: undefined
}

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case 'REGISTRATION_HAS_ERRORED':
            return {
                ...state,
                hasErrored: action.hasErrored
            };
        case 'REGISTRATION_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };
        case 'REGISTRATION_FETCH_SUCCESS':
            return {
                ...state,
                hasErrored: false,
                registrationResponse: action.response
            };
        case 'LOGIN_HAS_ERRORED':
            return {
                ...state,
                hasErrored: action.hasErrored
            };
        case 'LOGIN_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };
        case 'LOGIN_FETCH_SUCCESS':
            return {
                ...state,
                hasErrored: false,
                loginResponse: action.response
            };
        case 'SESSIONS_HAS_ERRORED':
            return {
                ...state,
                hasErrored: action.hasErrored
            };
        case 'SESSIONS_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };
        case 'SESSIONS_FETCH_SUCCESS':
            return {
                ...state,
                hasErrored: false,
                sessionsResponse: action.response
            };
        case 'LOGOUT_HAS_ERRORED':
            return {
                ...state,
                hasErrored: action.hasErrored
            };
        case 'LOGOUT_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };
        case 'LOGOUT_FETCH_SUCCESS':
            return {
                ...state,
                hasErrored: false,
                loginResponse: {
                    status: null
                },
                sessionsResponse: {
                    status: null,
                    user: {
                        _id: null,
                        email: null,
                        firstName: null,
                        lastName: null
                    }
                }
            };
        case 'REGISTRATION_CSRF_HAS_ERRORED':
            return {
                ...state,
                hasErrored: action.hasErrored
            };
        case 'REGISTRATION_CSRF_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };
        case 'REGISTRATION_CSRF_FETCH_SUCCESS':
            return {
                ...state,
                registrationCsrfToken: action.response.csrfToken
            };
        case 'LOGIN_CSRF_HAS_ERRORED':
            return {
                ...state,
                hasErrored: action.hasErrored
            };
        case 'LOGIN_CSRF_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };
        case 'LOGIN_CSRF_FETCH_SUCCESS':
            return {
                ...state,
                loginCsrfToken: action.response.csrfToken
            };
        default:
            return state;
    }
}