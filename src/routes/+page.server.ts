import api from '$lib/apiService.js';

export async function load({ params }) {
    const f = (await api.getFiles());

    console.log('>>>>>>>>>>>> f ', f);

    return {
        files: f,
    };
};


// import type { FileListing } from '$lib/models/api.js';
// import api from '$lib/apiService.js';

// export async function load() {
//     return {
//         files: (await api.getFiles()).files
//     };
// }