let initialState = {
    hasErrored: false,
    isLoading: false,
    registrationResponse: {
        status: null,
        err: null
    },
    loginResponse: {
        status: null,
        err: null
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
    logoutTrigger: false,
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
                hasErrored: true,
                loginResponse: {
                    status: null,
                    err: action.hasErrored
                }
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
                loginResponse: {
                    status: action.response.status,
                    err: null
                }
            };
        case 'SESSIONS_HAS_ERRORED':
            return {
                ...state,
                loginResponse: {
                    status: null
                },
                sessionsResponse: {
                    status: false,
                    user: {
                        _id: null,
                        email: null,
                        firstName: null,
                        lastName: null
                    }
                }
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
                loginResponse: {
                    status: "Success!"
                },
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
                logoutTrigger: true,
                loginResponse: {
                    status: null,
                    err: null
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
        case 'RESET_REGISTRATION':
            return {
                ...state,
                registrationResponse: {
                    status: null
                }
            };
     case 'RESET_LOGOUT_TRIGGER':
            return {
                ...state,
                logoutTrigger: false
            };
        default:
            return state;
    }
}