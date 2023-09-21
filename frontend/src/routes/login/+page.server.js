import {fail} from "@sveltejs/kit";
import {isSuccess, postUser} from "../fetcher.js";

/** @type {import('./$types').Actions} */
export const actions = {
    async login({cookies, request, fetch}) {
        const form = await request.formData();
        const username = form.get("username");
        const password = form.get("password");
        if (username == null || password == null)
            return fail(400, {message: "username and password must be provided"});
        const loginResponse = await postUser(fetch, {username, password});
        if (!isSuccess(loginResponse))
            return fail(loginResponse.status, {message: "Login failed."});
        const token = await loginResponse.json().then(json => json.access_token);
        cookies.set('sessionid', token);
        console.log("token", token);
        return {success: true};
    }
};

