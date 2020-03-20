export const notInFavorites = (favorites, album) => {
    for (let i = 0; i < favorites.length; i++) {
        if(favorites[i][`im:name`].label === album[`im:name`].label) {
            return false
        }
    }
    return true
} 

export const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}