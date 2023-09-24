import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, fetch}) {
    const token = await cookies.get('sessionid');
    if (token === undefined)
        return {user: undefined};

    const payload = await fetchUser(fetch, token);
    if (!payload || !payload.validity || !payload.permissions.includes("ACCESS_ADMIN_PANEL"))
        throw redirect(307, '/login');

    return {user: payload.payload}
}

async function fetchUser(fetch, token) {
    return (await fetch(process.env.AUTH_SERVICE_URI + `/api/v1/validate?permissions=true`, {
        method: "POST",
        headers,
        body: JSON.stringify({access_token: token})
    })).json();
}

const headers = {
    "Content-Type": "application/json",
    "Token": process.env.API_TOKEN
};
