import { type FileListing, type XSRF } from "./models/api.js";

const BASE_URL = 'http://localhost:5175';
// const BASE_URL = 'http://localhost:5000';

export async function getFiles() : Promise<FileListing[]> {
    const res = await fetch(`${BASE_URL}/files/`);

    return res.json();
}

export async function getXSRF() : Promise<XSRF> {
    const res = await fetch(`${BASE_URL}/files/upload`);

    const token = await res.json() as XSRF;

    return token;
}

export async function uploadFile(data: FormData) : Promise<void> {

    const res = await fetch(`${BASE_URL}/files/upload`, {
        method: "post",
        body:   data,
    });

    console.log('>>>>>>>>>>>> data', data);

    return Promise.resolve();
}




export default {
    uploadFile,
    getXSRF,
};