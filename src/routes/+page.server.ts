import api from '$lib/apiService.js';
import type { Handle } from '@sveltejs/kit';

export async function load({ params, setHeaders, locals }) {

    return {
    };
};


export const actions = {
    upload: async ({ cookies, request, locals }) => {

        const data = await request.formData();

        await api.uploadFile(data);
    }
}

export const handle: Handle = async ({ event, resolve }) => {
    return resolve(event);
}

// import type { FileListing } from '$lib/models/api.js';
// import api from '$lib/apiService.js';

// export async function load() {
//     return {
//         files: (await api.getFiles()).files
//     };
// }
