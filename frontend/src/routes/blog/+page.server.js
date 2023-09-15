export async function load({fetch, params}) {
    console.log("Fetching blogs from", process.env.BLOG_SERVICE_URI + "/api/v1/blogs?plainText=true");
    const response = await fetch(process.env.BLOG_SERVICE_URI + "/api/v1/blogs?plainText=true", {
        headers: {
            "Content-Type": "application/json",
            "Token": process.env.API_TOKEN
        },
    });
    if (response.status !== 200) {
        throw new Error("Failed to fetch");
    }
    const blogs = await response.json();
    return {blogs: blogs};
}

