
export function resolveApiUrl(uri) {
    return `${process.env.VUE_APP_API_HOST}/api/${uri}`;
}

export function getRandomValue(max) {
    return Math.floor(Math.random() * max);
}
