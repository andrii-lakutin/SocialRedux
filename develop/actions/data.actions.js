function getPersonalInfoSuccess(info) {
  return {
    type: "GET_PERSONAL_INFO_SUCCESS",
    info
  }
};

function getPersonalInfoHasErrored(err) {
  return {
    type: "GET_PERSONAL_INFO_HAS_ERRORED",
    hasErrored: err
  }
};

export function getPersonalInfo(url) {
  return (dispatch) => {
    fetch(url, {
      credentials: 'include',
      mode: 'no-cors'
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(getPersonalInfoSuccess(items)))
      .catch((err) => dispatch(getPersonalInfoHasErrored(err)));
  };
}
