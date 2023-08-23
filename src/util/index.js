
export function resolveApiUrl(uri) {
    return `${process.env.VUE_APP_API_HOST}/api/${uri}`;
}