import { type FileListing } from "./models/api.js";

const BASE_URL = 'http://localhost:5175';

export async function getFiles() : Promise<FileListing[]> {
    const res = await fetch(`${BASE_URL}/files/`);

    return res.json();
}



export default {
    getFiles,
};