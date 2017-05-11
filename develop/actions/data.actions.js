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

function personalChangeSuccess(info) {
  return {
    type: "PERSONAL_CHANGE_SUCCESS",
    info
  }
};

function personalChangeHasErrored(err) {
  return {
    type: "PERSONAL_CHANGE_HAS_ERRORED",
    hasErrored: err
  }
};

export function personalChange(field, newValue, currentPageOwner){
    return (dispatch) => {
    fetch(`http://localhost:3000/users/personal/${currentPageOwner}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "field": field,
          "newValue": newValue,
        })
      })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => dispatch(personalChangeSuccess(response)))
      .catch((err) => dispatch(personalChangeHasErrored(err)));
  };
}

function submitPostMsgSuccess(info) {
  return {
    type: "SUBMIT_POST_MSG_SUCCESS",
    info
  }
};

function submitPostMsgHasErrored(err) {
  return {
    type: "SUBMIT_POST_MSG_HAS_ERRORED",
    hasErrored: err
  }
};

export function submitPostMsg(msg, from, fullName){
  return (dispatch) => {
    fetch(`http://localhost:3000/posts/user/${from}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          msg,
          fullName
        })
      })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => dispatch(submitPostMsgSuccess(response)))
      .catch((err) => dispatch(submitPostMsgHasErrored(err)));
  };
}