import {redirect} from "@sveltejs/kit";

export async function load({fetch, cookies}) {
    cookies.set('sessionid', undefined);
    throw redirect(300, '/'); // todo does not work
}