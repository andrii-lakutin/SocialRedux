import { store } from "../app";

const asyncValidate = (values) => {
    let currentState = store.getState();
    return fetch("/auth/login",
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": values.email,
                "password": values.password,
                "_csrf": currentState.authentication.loginCsrfToken
            })
        })
        .then((response) => {
            if (!response.ok) { throw Error(response.statusText) }
            return response;
        })
        .catch((err) => {
            switch (err.message) {
                case "Invalid password":
                    throw { password: 'Invalid password' }
                    return;
                case "Invalid email":
                    throw { email: 'Invalid email' }
                    return;
                default:
                    return;
            }
        });
}

export default asyncValidate;