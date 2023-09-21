import {getUser, isSuccess} from "./fetcher.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({fetch, cookies}) {
    const token = await cookies.get('sessionid');
    if (token === undefined)
        return {user: undefined};
    const user = await getUser(fetch, token).then(response => {
        if (!isSuccess(response))
            return undefined;
        return response.json().then(json => json.payload);
    });
    return {user: user};
}

