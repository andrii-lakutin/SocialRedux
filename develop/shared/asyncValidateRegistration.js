const asyncValidate = (values) => {
    return fetch("/auth/register",
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "firstName" : values.firstName,
                "lastName" : values.lastName,
                "email": values.email,
                "password": values.password,
                "readOnly" : true
            })
        })
        .then((response) => {
            if (!response.ok) { throw Error(response.statusText) }
            return response;
        })
        .catch((err) => {
            switch (err.message) {
                case "That email is already taken, try another":
                    throw { email: 'That email is already taken, try another' }
                    return;
                default:
                    return;
            }
        });
}

export default asyncValidate;