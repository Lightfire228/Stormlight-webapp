export type FileListing = {
    name: string,
    type: string,
}

export type FileListingResponse = {
    files: FileListing[],
}
