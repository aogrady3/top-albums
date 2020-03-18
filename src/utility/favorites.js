export const notInFavorites = (favorites, album) => {
    for (let i = 0; i < favorites.length; i++) {
        if(favorites[i][`im:name`].label === album[`im:name`].label) {
            return false
        }
    }
    return true
} 