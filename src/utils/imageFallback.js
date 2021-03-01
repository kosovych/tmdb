const imageFallbackPath = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
const imagePrefix = 'https://image.tmdb.org/t/p/w500/'

export const getImageFallback = imagePath => (imagePath ? `${imagePrefix}${imagePath}` : imageFallbackPath)
