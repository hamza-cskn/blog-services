import {fail} from "@sveltejs/kit";
import {getBlog, isSuccess} from "../../../../bin/fetcher.js";

export const load = async ({fetch, params}) => {
    const blog = await getBlog(fetch, params.slug).catch(() => null);
    return {blog: blog};
}

/** @type {import('../../../../../.svelte-kit/types/src/routes').Actions}*/
export const actions = {
    async blog({request, fetch, params}) {
        const form = await request.formData();
        const title = form.get("title");
        const author = form.get("author");
        const content = form.get("content");
        const visibility = form.get("visibility") !== null;

        if (content == null || title == null || author == null)
            return fail(400, {message: "content, title and author must be provided"});
        let response;
        if (params.slug === "new")
            response = await sendBlog(fetch, "POST", "/api/v1/blogs", title, author, content, visibility);
        else
            response = await sendBlog(fetch, "PATCH", `/api/v1/blogs/${params.slug}`, title, author, content, visibility);
        if (!isSuccess(response))
            return fail(response.status, {message: "Post failed."});
        return {success: true};
    }
}

function sendBlog(fetch, method, path, title, author, content, visibility) {
    return fetch(process.env.BLOG_SERVICE_URI + path, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Token": process.env.API_TOKEN
        },
        body: JSON.stringify({title, author, content, visible: visibility})
    });
}