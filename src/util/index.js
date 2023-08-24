
export function resolveApiUrl(uri) {
    return `${process.env.VUE_APP_API_HOST}/api/${uri}`;
}

export function getRandomValue(max) {
    return Math.floor(Math.random() * max);
}

export function canShare() {
    // if (navigator.share !== undefined && navigator.canShare !== undefined) {
    //     // The canShare function is supported in this browser.
    //     // You can use it to check if specific data can be shared.
    //     return navigator.canShare(this.shareContent);
    // }
    //
    return false;
}