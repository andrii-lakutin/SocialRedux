function registrationIsLoading(bool) {
  return {
    type: "REGISTRATION_IS_LOADING",
    isLoading: bool
  }
};

function registrationFetchSuccess(response) {
  return {
    type: "REGISTRATION_FETCH_SUCCESS",
    response
  }
};

function registrationHasErrored(bool) {
  return {
    type: "REGISTRATION_HAS_ERRORED",
    hasErrored: bool
  }
};

function loginIsLoading(bool) {
  return {
    type: "LOGIN_IS_LOADING",
    isLoading: bool
  }
};

function loginFetchSuccess(response) {
  return {
    type: "LOGIN_FETCH_SUCCESS",
    response
  }
};

function loginHasErrored(bool) {
  return {
    type: "LOGIN_HAS_ERRORED",
    hasErrored: bool
  }
};

function logoutIsLoading(bool) {
  return {
    type: "LOGOUT_IS_LOADING",
    isLoading: bool
  }
};

function logoutFetchSuccess(response) {
  return {
    type: "LOGOUT_FETCH_SUCCESS",
    response
  }
};

function logoutHasErrored(bool) {
  return {
    type: "LOGOUT_HAS_ERRORED",
    hasErrored: bool
  }
};

function sessionsIsLoading(bool) {
  return {
    type: "SESSIONS_IS_LOADING",
    isLoading: bool
  }
};

function sessionsFetchSuccess(response) {
  return {
    type: "SESSIONS_FETCH_SUCCESS",
    response
  }
};

function sessionsHasErrored(bool) {
  return {
    type: "SESSIONS_HAS_ERRORED",
    hasErrored: bool
  }
};

function csrfRegistrationIsLoading(bool) {
  return {
    type: "REGISTRATION_CSRF_IS_LOADING",
    isLoading: bool
  }
};

function csrfRegistrationFetchSuccess(response) {
  return {
    type: "REGISTRATION_CSRF_FETCH_SUCCESS",
    response
  }
};

function csrfRegistrationHasErrored(bool) {
  return {
    type: "REGISTRATION_CSRF_HAS_ERRORED",
    hasErrored: bool
  }
};

function csrfLoginIsLoading(bool) {
  return {
    type: "LOGIN_CSRF_IS_LOADING",
    isLoading: bool
  }
};

function csrfLoginFetchSuccess(response) {
  return {
    type: "LOGIN_CSRF_FETCH_SUCCESS",
    response
  }
};

function csrfLoginHasErrored(bool) {
  return {
    type: "LOGIN_CSRF_HAS_ERRORED",
    hasErrored: bool
  }
};


export function registration(url, data) {
  return (dispatch) => {
    dispatch(registrationIsLoading(true));

    fetch(url,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "firstName": data[0],
          "lastName": data[1],
          "email": data[2],
          "password": data[3],
          "_csrf" : data._csrf
        })
      })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(registrationIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(registrationFetchSuccess(items)))
      .catch((err) => dispatch(registrationHasErrored(err)));
  };
}


export function login(url, data) {
  return (dispatch) => {
    dispatch(loginIsLoading(true));

    fetch(url,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": data[0],
          "password": data[1],
          "_csrf" : data._csrf
        })
      })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loginIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(loginFetchSuccess(items)))
      .catch((err) => dispatch(loginHasErrored(err)));
  };
}

export function isInSession(url) {
  return (dispatch) => {
    dispatch(sessionsIsLoading(true));

    fetch(url, {
      credentials: 'include',
      mode: 'no-cors'
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(sessionsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(sessionsFetchSuccess(items)))
      .catch((err) => dispatch(sessionsHasErrored(err)));
  };
}

export function logout(url) {
  return (dispatch) => {
    dispatch(logoutIsLoading(true));

    fetch(url, {
      credentials: 'include',
      mode: 'no-cors'
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(logoutIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(logoutFetchSuccess(items)))
      .catch((err) => dispatch(logoutHasErrored(err)));
  };
}

export function getRegistrationSCRFToken(url) {
  return (dispatch) => {
    dispatch(csrfRegistrationIsLoading(true));

    fetch(url, {
      credentials: 'include',
      mode: 'no-cors'
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(csrfRegistrationIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(csrfRegistrationFetchSuccess(items)))
      .catch((err) => dispatch(csrfRegistrationHasErrored(err)));
  };
}

export function getLoginSCRFToken(url) {
  return (dispatch) => {
    dispatch(csrfLoginIsLoading(true));

    fetch(url, {
      credentials: 'include',
      mode: 'no-cors'
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(csrfLoginIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(csrfLoginFetchSuccess(items)))
      .catch((err) => dispatch(csrfLoginHasErrored(err)));
  };
}