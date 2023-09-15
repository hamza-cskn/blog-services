/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    console.log("Loading blog page")
    const comments = await fetchComments(params);
    const blog = await fetchBlog(params);
    console.log("Blog page loaded.")
    console.log(comments);
    return {blog: blog, comments: comments};
}

const options = {
    headers: {
        "Content-Type": "application/json",
        "Token": process.env.API_TOKEN
    },
};

async function fetchBlog(params) {
    return fetch(process.env.BLOG_SERVICE_URI + `/api/v1/blogs/${params.slug}`, options)
        .then((result) => {
            if (result.status !== 200)
                throw new Error("Blog could not fetched");
            return result.json();
        });
}

async function fetchComments(params) {
    return fetch(process.env.COMMENT_SERVICE_URI + `/api/v1/blogs/${params.slug}/comments`, options)
        .then((result) => result.status === 200 ? result.json() : [])
        .catch((error) => {
            console.error("Error fetching comments:", error);
            return [];
        });
}
