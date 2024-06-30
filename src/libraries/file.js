const FILE_EXTENSION_ARRAY = {
    'image/jpeg'    : 'jpg',
    'image/gif'     : 'gif',
    'image/png'     : 'png',
    'image/webp'    : 'webp',
    'image/avif'    : 'avif',
}

export function getImageExtension(file) {

    return FILE_EXTENSION_ARRAY[file.type] || null;
}