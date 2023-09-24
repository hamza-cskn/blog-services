import {getBlogs} from "../../../bin/fetcher.js";

export const load = async ({fetch}) => {
    return {blogs: await getBlogs({showUnverified: true})};
}

