import {getBlogs} from "../../bin/fetcher.js";

export async function load({fetch, params}) {
    return {blogs: await getBlogs({plainText: true})}
}

