import { IS_LOADING } from './type';

export const isLoading = (loading) =>{
    return {
        type: IS_LOADING,
        payload: loading
    }
}