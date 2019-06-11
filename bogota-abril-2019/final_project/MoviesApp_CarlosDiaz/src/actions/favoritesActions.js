import { IS_IN_FAVORITES } from './type';

export const isInFavorites = (alreadyInFavorites) =>{
    return {
        type: IS_IN_FAVORITES,
        payload: alreadyInFavorites
    }
}