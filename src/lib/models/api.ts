export type FileListing = {
    name: string,
    type: string,
}

export type FileListingResponse = {
    files: FileListing[],
}

export type XSRF = {
    value:  string,
    name:   string,
    cookie: string,
}