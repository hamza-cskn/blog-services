export const fetchService = async (fetch, method, entrypoint, body) => {
    return await fetch(entrypoint, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Token": process.env.API_TOKEN
        },
        body: JSON.stringify(body)
    });
}

export const fetchAuthService = async (fetch, method, path, body) => {
    return await fetchService(fetch, method, process.env.AUTH_SERVICE_URI + path, body);
}

export const fetchBlogService = async (fetch, method, path, body) => {
    return await fetchService(fetch, method, process.env.BLOG_SERVICE_URI + path, body);
}

export const postUser = async (fetch, credentials) =>
    fetchAuthService(fetch, "POST", "/api/v1/login", credentials);

export const getUser = async (fetch, token) =>
    fetchAuthService(fetch, "POST", "/api/v1/validate", {access_token: token});

export const isSuccess = (response) => 200 <= response.status && response.status < 300;

export async function getBlogs({plainText = false, limit = 50, offset = 0, showUnverified = false} = {}) {
    const response = await fetchBlogService(fetch, "GET",
        `/api/v1/blogs?plainText=${plainText}&showUnverified=${showUnverified}&limit=${limit}&offset=${offset}`);
    if (!isSuccess(response))
        throw new Error("Failed to fetch");
    return await response.json();
}

export async function getBlog(fetch, id) {
    const response = await fetchBlogService(fetch, "GET",
        `/api/v1/blogs/${id}`);
    if (!isSuccess(response))
        throw new Error("Failed to fetch");
    return await response.json();
}

export async function updateBlog(fetch, ) {

}

