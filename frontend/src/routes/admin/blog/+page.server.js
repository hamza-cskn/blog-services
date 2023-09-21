import {fail} from "@sveltejs/kit";
import {isSuccess} from "../../fetcher.js";

/** @type {import('./$types').Actions}*/
export const actions = {
    async blog({request, fetch}) {
        const form = await request.formData();
        const title = form.get("title");
        const author = form.get("author");
        const content = form.get("content");
        if (content == null || title == null || author == null)
            return fail(400, {message: "content, title and author must be provided"});
        const response = await postBlog(fetch, title, author, content);
        if (!isSuccess(response))
            return fail(response.status, {message: "Post failed."});
        return {success: true};
    }
}

function postBlog(fetch, title, author, content) {
    return fetch(process.env.BLOG_SERVICE_URI + `/api/v1/blogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Token": process.env.API_TOKEN
        },
        body: JSON.stringify({title, author, content})
    });
}