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

function resetRegistration() {
  return {
    type: "RESET_REGISTRATION"
  }
};

function resetLogoutTrigger() {
  return {
    type: "RESET_LOGOUT_TRIGGER"
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
          "firstName": data.firstName,
          "lastName": data.lastName,
          "email": data.email,
          "password": data.password,
          "_csrf": data._csrf,
          "readonly": false
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
      .then(() => dispatch(resetRegistration()))
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
          "email": data.email,
          "password": data.password,
          "_csrf": data._csrf
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
      .catch((err) => dispatch(loginHasErrored(err.message)));
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
      .then(() => dispatch(resetLogoutTrigger()))
      .catch((err) => dispatch(logoutHasErrored(err)));
  };
}
