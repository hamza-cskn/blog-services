export const fetchAuthService = async (fetch, method, path, body) => {
    return await fetch(process.env.AUTH_SERVICE_URI + path, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Token": process.env.API_TOKEN
        },
        body: JSON.stringify(body)
    });
}

export const postUser = async (fetch, credentials) =>
    fetchAuthService(fetch, "POST", "/api/v1/login", credentials);

export const getUser = async (fetch, token) =>
    fetchAuthService(fetch, "POST", "/api/v1/validate", {access_token: token});

export const isSuccess = (response) => 200 <= response.status && response.status < 300;
