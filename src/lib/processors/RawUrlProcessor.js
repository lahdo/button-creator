export function process(rawUrl) {
    if (!rawUrl.urls.length || !rawUrl.urls[0].length) {
        throw new Error('sorry the new url is too short');
    }

    return rawUrl.urls[0];
}
